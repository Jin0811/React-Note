import React, { Component } from 'react';

class Demo extends Component {
  state = {
    count: 0
  }

  add = () => {
    // 写法一（对象式）
    // let { count } = this.state;
    // this.setState({ count: count+1 }, ()=>{
    //   console.log(this.state.count);
    // });

    // 写法二（函数式）
    // this.setState(state => ({ count: state.count+1 })); // 简写
    this.setState((state, props)=>{
      return { count: state.count+1 }
    }, ()=>{
      console.log(this.state.count);
    });
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{ this.state.count }</h1>
        <button onClick={this.add}>加1</button>
      </div>
    );
  }
}

export default Demo;