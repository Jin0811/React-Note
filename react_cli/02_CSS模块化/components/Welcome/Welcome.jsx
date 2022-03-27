import React, { Component } from 'react';
import styles from "./Welcome.module.css"; // 样式模块化

export default class Welcome extends Component{
  render(){
    return (
      <div className={styles.title}>Welcome</div>
    )
  }
}