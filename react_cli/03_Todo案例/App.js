import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import List from "./components/List/List"

export default class App extends Component {
  state = {
    todos: [
      { id: "0001", name: "吃饭", done: true },
      { id: "0002", name: "睡觉", done: true },
      { id: "0003", name: "写代码", done: false },
    ]
  }

  // 添加一个todo
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  }
  // 更新一个todo
  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map(todoObj => {
      if(todoObj.id === id){
        return { ...todoObj, done }
      }else{
        return todoObj
      }
    });
    this.setState({ todos: newTodos });
  }
  // 删除todo
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter(todoObj => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  }
  // 全选
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map(todoObj => {
      return { ...todoObj, done }
    });
    this.setState({ todos: newTodos });
  }
  // 清除已完成任务
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter(todoObj => {
      return !todoObj.done;
    });
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
          <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}></Footer>
        </div>
      </div>
    )
  }
}
