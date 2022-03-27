import React, { Component } from 'react';

import "./App.css";
import Count from "./components/Count";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Count></Count>
      </div>
    )
  }
}
