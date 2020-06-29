import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  //3 javascript object literals
  {
    'title' : "Work Example",
    'href': "https://example.com",
    'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image' : {
      'description': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title' : "Portfolio Boilerplate",
    'href': "https://example.com",
    'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image' : {
      'description': "example screenshot of a project involving chemistry",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title' : "Work Example",
    'href': "https://example.com",
    'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
