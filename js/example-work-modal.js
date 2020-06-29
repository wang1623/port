import React from 'react';

class ExampleWorkModal extends React.Component {
  //it renders out HTML according to this JSX
  //use React to manage modal states
  render(){
    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
      <div className={"background--skyBlue " + modalClass}>
        <span className="color--cloud modal__closeButton"
          onClick={this.props.closeModal}>
          <i className="fa fa-window-close-o"></i>
        </span>
        <img alt="example.image.description"
             className="modal__image"
             src="example.image.src"/>
        <div className="color--cloud modal__text">
          <h2 className="modal__title">
            {example.title}
          </h2>
          <a className="color--skyBlue modal__link"
             href={example.href}>
            Check it out
          </a>
          <p className="modal__description">
            {example.description}
          </p>
        </div>
      </div>
    )
  };
};

export default ExampleWorkModal;
