import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

portfolio_bucket = s3.Bucket('port.timwang.space')
build_bucket = s3.Bucket('portbuild.timwang.space')

portfolio_zip = StringIO.StringIO()
build_bucket.download_fileobj('portbuild.zip', portfolio_zip)

with zipfile.ZipFile(portfolio_zip) as myZip:
    for file in myZip.namelist():
        obj = myZip.open(file)
        portfolio_bucket.upload_fileobj(obj, file,
          ExtraArgs={'ContentType': mimetypes.guess_type(file)[0]})
        portfolio_bucket.Object(file).Acl().put(ACL='public-read')
