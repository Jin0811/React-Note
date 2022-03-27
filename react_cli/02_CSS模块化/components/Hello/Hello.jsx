import React, { Component } from 'react';
import styles from "./Hello.module.css"; // 样式模块化

export default class Hello extends Component{
  render(){
    return (
      <div className={styles.title}>Hello</div>
    )
  }
}