import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component{
  // Above we have created a class called App that extends the functionality of the Component Class.

  // The export keyword makes the class available for use outside of the JS file where it is created (like the access modifier in C#)

  constructor(){
    // We are going to create state data for our component. To do that, we need to create a constructor method. This method will get called when an object is created using this class. Said another way, this method will be called when the component is initialized.

    // To ensure that we have all the necessary features from React to create a stateful component, we need to call a method called super(). This super() calls the constructor for the Component class in React.
    super();
  }

  // When using fat arrow (lamda) syntax the return keyword is not needed and the curly braces (scope) around the body of the function is also not needed
  render = () =>
    <div>

    </div>
};