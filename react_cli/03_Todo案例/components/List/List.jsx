import React, { Component } from "react";
import PropTypes from "prop-types"
import "./List.css"
import Item from "../Item/Item"

export default class List extends Component {

  // 对接受的props进行类型、必传的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  render() {
    let { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {
          todos.map(item => {
            return <Item key={item.id} {...item} updateTodo={updateTodo} deleteTodo={deleteTodo}></Item>
          })
        }
      </ul>
    );
  }
}
