import React, { Component } from "react";
import "./Footer.css"

export default class Footer extends Component {

  // 全选的回调函数
  handleCheck = (event) => {
    this.props.checkAllTodo(event.target.checked);
  }
  // 清除已完成任务
  handleClearAllDone= () => {
    this.props.clearAllDone();
  }

  render() {
    let { todos } = this.props;
    const doneCount = todos.reduce((pre, current) => {
      return current.done ? pre+1 : pre;
    }, 0);
    const total = todos.length;
    
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={ doneCount === total && total !== 0 } onChange={this.handleCheck} />
        </label>
        <span>
          <span>已完成 { doneCount }</span>
          <span>/ 全部 { total }</span>
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
