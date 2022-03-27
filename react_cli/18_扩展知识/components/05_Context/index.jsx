import React, { Component } from 'react';

// 创建一个Context对象
const MyContext = React.createContext();

class A extends Component {
  state = {
    userName: "张三",
    age: 18
  }
  render() {
    const { userName, age } = this.state;
    return (
      <div className="parent">
        <h1>A 一级组件</h1>
        <p>我的用户名为：{ userName }</p>
        <MyContext.Provider value={{ userName, age }}>
          <B></B>
        </MyContext.Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="child">
        <h2>B 二级组件</h2>
        <p>从A组件接收到的用户名为：</p>
        <C></C>
        <FunC></FunC>
      </div>
    );
  }
}

class C extends Component {
  // 必须声明接收context
  static contextType = MyContext;
  render() {
    let { userName, age } = this.context;
    return (
      <div className="grand">
        <h3>C 三级组件 类式组件</h3>
        <p>从B组件接收到的用户信息为：{ userName } -- { age }</p>
      </div>
    );
  }
}

// 函数式组件
function FunC(){
  return (
    <div className="grand">
      <h3>C 三级组件 函数式组件</h3>
      <MyContext.Consumer>
        {
          value => {
            let { userName, age } = value;  
            return <p>从B组件接收到的用户信息为：{ userName } -- { age }</p> 
          }
        }
      </MyContext.Consumer>
    </div>
  );
}


export default A;