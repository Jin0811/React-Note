import React, { Component } from 'react';
import './App.css';

import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: "",
  }

  // 更新state
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}></Search>
        <List { ...this.state }></List>
      </div>
    )
  }
}
