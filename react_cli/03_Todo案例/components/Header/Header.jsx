import React, { Component } from 'react'
import PropTypes from "prop-types"
import { nanoid } from "nanoid"
import "./Header.css"

export default class Header extends Component {

  // 对接受的props进行类型、必传的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  // 键盘事件的回调
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    // 如果不是enter键，则直接返回
    if(keyCode !== 13){ return }
    if(target.value.trim() === ""){
      return alert("输入不能为空");
    }
    const todoObj = { id: nanoid(), name: target.value, done: false }
    this.props.addTodo(todoObj);
    target.value = "";
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
