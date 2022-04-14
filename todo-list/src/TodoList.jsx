import React from "react";
import { Component } from "react/cjs/react.production.min";
import TasksList from './TasksList'
import { createTask, fetchTasksList, updateTask, deleteTask } from "./tasksGateway";

class TodoList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList => 
      this.setState({
        tasks: tasksList,
      }),
    );
  };

  onCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask)
    .then(() => this.fetchTasks()) 
  };

  handleTaskStatusChange = (id) => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done
    };

    updateTask(id, updatedTask)
    .then(() => this.fetchTasks());

  }

  handleTaskDelete = (id) => {
    deleteTask(id)
    .then(() => this.fetchTasks());
  }
  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <TasksList 
        tasks={this.state.tasks}
        onCreate={this.onCreate} 
        handleTaskStatusChange={this.handleTaskStatusChange}
        handleTaskDelete={this.handleTaskDelete}
         />
      </>
    );
  }
};

export default TodoList;