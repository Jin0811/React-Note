import React, { Component } from 'react';

class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h1>Parent 一级组件</h1>
        <A render={(name) => <B name={name}/>}></A>
      </div>
    );
  }
}

class A extends Component {
  state = {
    name: "张三"
  }
  render() {
    return (
      <div className="child">
        <h2>A 二级组件</h2>
        { this.props.render(this.state.name) }
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="grand">
        <h3>B 三级组件 name为：{ this.props.name }</h3>
      </div>
    );
  }
}

export default Parent;