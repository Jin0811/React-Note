import React, { Component } from 'react';

// 引入store，获取被redux管理的状态
import store from "../redux/store";
// 引入actionCreater，专门用于创建action对象
import { createIncrementAction, createDecrementAction } from "../redux/count_action";

class componentName extends Component {

  // 每一个组件当中，都需要单独进行检测，比较麻烦，可以直接写在index.js当中
  // componentDidMount(){
  //   // 检测redux中状态的变化，任意一个状态发生改变，就需要重新更新一下视图
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }

  // 增加
  increment = () => {
    const { value } = this.selectNumber;
    // 通知redux进行加的操作
    store.dispatch(createIncrementAction(value*1));
  }
  // 减少
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value*1));
  }
  // 当前求和为奇数时再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if(count % 2 !== 0){
      store.dispatch(createIncrementAction(value*1));
    }
  }
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    setTimeout(() => {
      store.dispatch(createIncrementAction(value*1));
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{ store.getState() }</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数时再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

export default componentName;