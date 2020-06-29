import React from 'react';
import ExampleWorkModal from './example-work-modal';

class ExampleWork extends React.Component {

  constructor(props){
    super(props);

    //the value of this.state is always a javascript object
    //we want to think what states we want to manage.
    //To change the state, we need to use event handler
    this.state = {
      'modalOpen': false,
      'selectedExample': this.props.work[0]
    }

    //bind() in constructor gives these functions access to our object.
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(event, example){
    this.setState({
      'modalOpen': true,
      'selectedExample': example
    });
  }

  closeModal(event){
    this.setState({
      'modalOpen': false
    });
  }

  //we can only return one section in the return(). So we use <span> to wrap them.
  /* the state modalOpen is managed by the parent component 'ExampleWork' */
  render(){
    return (
      <span>
        <section className="section section--alignCentered section--description">

          {this.props.work.map((example, index) => {
              return(
                /* refer other component in JSX */
                <ExampleWorkBubble example={example} key={index}
                  openModal={this.openModal}/>
              )
            })
          }

        </section>

      
        <ExampleWorkModal example={this.state.selectedExample}
          open={this.state.modalOpen} closeModal={this.closeModal}/>
      </span>
    )
  }
}

//since each component is a standalone object, the ExampleWorkBubble does not have access to modalOpen/modalClose functions.
//so we should pass these function into the component as prop.
class ExampleWorkBubble extends React.Component {
  render() {
    let example = this.props.example;
    return (
      /* The browser will call this openModal as soon as this <div> is clicked
          onClick needs a function. The function delegates to openModal.
          ExampleWorkBubble should know which example it represent so we pass the example to openModal function.
      */
      <div className="section__exampleWrapper" onClick={(event) => this.props.openModal(event, example)}>
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
