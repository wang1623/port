import React from 'react';

class ExampleWork extends React.Component {
  render(){
    return (
      <section className="section section--alignCentered section--description">

        {this.props.work.map((example, index) => {
            return(
              //refer other component in JSX
              <ExampleWorkBubble example={example} key={index}/>
            )
          })
        }

      </section>
    )
  }
}

class ExampleWorkBubble extends React.Component {
  render() {
    let example = this.props.example;
    return (
      <div className="section__exampleWrapper">
        <div className="section__example">
          <img alt= { example.image.description }
               className="section__exampleImage"
               src={ example.image.src}/>
          <dl className="color--cloud">
            <dt className="section__exampleTitle section__text--centered">
              {example.title}
            </dt>
            <dd></dd>
          </dl>
        </div>
      </div>
    )
  }
}

//each file can have one default export
export default ExampleWork;
//when other file imports from here, it will get ExampleWork by default
//but if it asks, it can still get ExampleWorkBubble.
export { ExampleWorkBubble };
