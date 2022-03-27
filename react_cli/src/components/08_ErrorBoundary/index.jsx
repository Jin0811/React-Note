import React, { Component } from 'react';

import Child from "./Child";

class Parent extends Component {
  state = {
    hasError: ""
  }

  // 如果当前组件的任何子组件出现了报错时，会触发此函数，并携带错误信息
  // 在此方法当中，必须返回一个对象，可以更新state当中的数据
  // 这样我们可以在虚拟DOM当中，利用错误信息，来判断显示的东西
  static getDerivedStateFromError(error){
    console.log(error);
    return { hasError: error }
  }
  componentDidCatch(){
    // 统计页面的错误，发送请求发送到后台去
    // 用于通知编码人员，方便排查问题
    console.log("组件渲染出错");
  }

  render() {
    return (
      <div className="parent">
        <h2>Parent 组件</h2>
        { this.state.hasError ? "子组件发生错误" : <Child></Child> }
      </div>
    );
  }
}

export default Parent;