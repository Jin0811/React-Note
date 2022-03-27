/**
 * 从默认导入导入React，从多重暴露导入Component
 * let React = { a: 1, b: 2 };
 * export class Component{}
 * React.Component = Component;
 * export default React;
 */
import React, { Component } from 'react';
import './App.css';
import Hello from "./components/Hello/Hello"
import Welcome from "./components/Welcome/Welcome"

export default class App extends Component{
  render(){
    return (
      <div>
        <Hello></Hello>
        <Welcome></Welcome>
      </div>
    )
  }
}
