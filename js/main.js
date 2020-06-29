import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  //3 javascript object literals
  {
    'title' : "Work Example",
    'image' : {
      'description': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title' : "Portfolio Boilerplate",
    'image' : {
      'description': "example screenshot of a project involving chemistry",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title' : "Work Example",
    'image' : {
      'description': "example screenshot of a project involving cats",
      'src': "images/example3.png",
      //use grave quote to do javascript template string
      'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
         https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
]

//refer the ExampleWork component in JSX like <ExampleWork />, then render it somewhere using getElementById('id')
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
