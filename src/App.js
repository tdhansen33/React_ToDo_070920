import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {ToDoBanner} from './ToDoBanner';
import {ToDoRow} from './ToDoRow';
import {ToDoCreator} from './ToDoCreator';

export default class App extends Component{
  // Above we have created a class called App that extends the functionality of the Component Class.

  // The export keyword makes the class available for use outside of the JS file where it is created (like the access modifier in C#)

  constructor(){
    // We are going to create state data for our component. To do that, we need to create a constructor method. This method will get called when an object is created using this class. Said another way, this method will be called when the component is initialized.

    // To ensure that we have all the necessary features from React to create a stateful component, we need to call a method called super(). This super() calls the constructor for the Component class in React.
    super();

    this.state = {
      userName: "Tyler",
      todoItems: [
        {action: "Get Exalted with Voldunai", done: false},
        {action: "Level Druid to Max", done: false},
        {action: "Make 120,000 Gold", done: false},
        {action: "Get good at Jhin", done: false},
        {action: "Buy Brendan new headset", done: false}
      ]
    }
  }

  // If the ToDoRow Component's "done" property experiences a change event (checking the Done box in the UI) then the ToDoRow Component calls a callback method called toggleToDo (below) and passes toggleToDo the checked todo item
  todoTableRows = (isTaskDone) => this.state.todoItems.filter(x => x.done === isTaskDone).map(notCompleted => <ToDoRow
    key = {notCompleted.action}
    item = {notCompleted}
    callback = {this.toggleToDo}
  />)

  // The toggleToDo method is invoked as a callback when the ToDoRow component has a change event to the "done" property
  // .setState allows the data to be updated
  toggleToDo = (todo) => this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action ? {...item, done:!item.done} : item)
  });

  // Method below is the callback for the ToDoCreator Component
  createNewTodoCallback = (newTask) => {
    if (!this.state.todoItems.find(x => x.action === this.state.newItemText)) {
      this.setState({
        // The spread operator {...} below expands the array of todoItmes and adds the new item to the array
        todoItems: [...this.state.todoItems, {action: newTask, done: false}]
      },

      () => localStorage.setItem("todos", JSON.stringify(this.state))

      );
    }
  }

  // The method below is a built in react method to handle logic for when the app "mounts" or "loads"
  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(data != null ? JSON.parse(data) : {
      userName: "John Doe",
       todoItems: [
         {action: "Do Something", done :false},
         {action: "Do Something", done: false},
         {action: "Do Something", done: false}
        ]
      }
    )
  }

  // When using fat arrow (lamda) syntax the return keyword is not needed and the curly braces (scope) around the body of the function is also not needed
  render = () =>
    <div>
      <ToDoBanner
        Name = {this.state.userName}
        Tasks = {this.state.todoItems}
      />

      {/* Feature 5 */}
      <ToDoCreator
        callback = {this.createNewTodoCallback}
      />

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {this.todoTableRows(false)}
        </tbody>
      </table>

    </div>
};