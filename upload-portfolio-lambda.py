import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

codepipeline = boto3.client('codepipeline')

def lambda_handler(event, context):

    location = {
        "bucketName": 'portbuild.timwang.space',
        "objectKey": 'portbuild.zip'
    }

    job = event.get("CodePipeline.job")

    if job:
        for artifact in job["data"]["inputArtifacts"]:
            if artifact["name"] == "BuildArtifact":
                location = artifact["location"]["s3Location"]

    print "Building portfolio from " + str(location)
    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

    portfolio_bucket = s3.Bucket('port.timwang.space')
    build_bucket = s3.Bucket(location["bucketName"])

    portfolio_zip = StringIO.StringIO()
    build_bucket.download_fileobj(location["objectKey"], portfolio_zip)

    with zipfile.ZipFile(portfolio_zip) as myZip:
        for file in myZip.namelist():
            obj = myZip.open(file)
            portfolio_bucket.upload_fileobj(obj, file,
              ExtraArgs={'ContentType': mimetypes.guess_type(file)[0]})
            portfolio_bucket.Object(file).Acl().put(ACL='public-read')

    if job:
        codepipeline.put_job_success_result(jobId=job["id"])

    return 'Success'
