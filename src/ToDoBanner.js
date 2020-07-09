import React, {Component} from 'react';

export class ToDoBanner extends Component{
    render = () =>
      <h4 className="bg-primary text-white text-center p-2">
        {this.props.Name}'s To Do List ({this.props.Tasks.filter(task => !task.done).length} items left)
      </h4>
  };