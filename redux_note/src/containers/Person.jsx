import React, { Component } from 'react';
import { connect } from "react-redux";
import { nanoid } from "nanoid";

import { createAddPerson } from "../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const { value: name } = this.nameNode;
    const { value: age } = this.ageNode;
    const personObj = { id: nanoid(), name, age };
    this.props.addPerson(personObj);
    this.nameNode.value = "";
    this.ageNode.value = "";
  }
  render() {
    const { personList } = this.props;
    return (
      <div>
        <h2>Person组件，上方组件求和为：{ this.props.count }</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>
        <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            personList.map(item => {
              return <li key={item.id}>{ item.name } -- { item.age }</li>
            })
          }
        </ul>
      </div>
    );
  }
}

// 容器组件
export default connect(
  state=>({ 
    count: state.count,
    personList: state.personList 
  }),
  { addPerson: createAddPerson }
)(Person);