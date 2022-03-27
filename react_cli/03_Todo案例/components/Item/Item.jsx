import React, { Component } from "react";
import "./Item.css"

export default class Item extends Component {
  state = {
    mouse: false
  }

  // 处理鼠标移入和移出
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    }
  }
  // 勾选或取消勾选
  handleCheck = (event) => {
    let { id } = this.props;
    let checked = event.target.checked;
    this.props.updateTodo(id, checked);
  }
  // 删除todo
  handleDelete = () => {
    if(window.confirm("确认删除嘛？")){
      let { id } = this.props;
      this.props.deleteTodo(id);
    }
  }

  render() {
    let { name, done } = this.props;
    let { mouse } = this.state;
    return (
      <li style={{ background: mouse ? "#ddd" : "#fff" }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck} />
          <span>{ name }</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? "block" : "none" }} onClick={this.handleDelete}>删除</button>
      </li>
    );
  }
}
