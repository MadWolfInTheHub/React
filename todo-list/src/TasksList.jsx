import React, { Component } from "react";
import CreateTaskInput from "./CreateTaskInput";
import Task from "./Task";

class TasksList extends Component {

  render() {
    const sortedList = this.props.tasks
    .slice()  
    .sort((a, b) => a.done - b.done)
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.props.onCreate}/>
        <ul className="list">
          {sortedList.map( task => (
            <Task 
              key={task.id} 
              {...task} 
              onChange={this.props.handleTaskStatusChange}
              onDelete={this.props.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  };
};

export default TasksList;