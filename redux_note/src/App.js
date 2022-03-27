import React, { Component } from 'react';

import "./App.css";

// 引入相关容器组件
import Count from "./containers/Count";
import Person from "./containers/Person";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Count></Count>
        <br/><hr/>
        <Person></Person>
      </div>
    )
  }
}
