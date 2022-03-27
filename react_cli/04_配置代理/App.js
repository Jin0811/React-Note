import React, { Component } from 'react';
import axios from "axios";
import './App.css';

export default class App extends Component {

  // 获取学生数据 
  getStudentData = () => {
    axios.get("http://localhost:3000/api1/students").then(res => {
      console.log(res.data);
    });
  }
  // 获取汽车数据
  getCarData = () => {
    axios.get("http://localhost:3000/api2/cars").then(res => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>获取学生数据</button>
        <button onClick={this.getCarData}>获取汽车数据</button>
      </div>
    )
  }
}
