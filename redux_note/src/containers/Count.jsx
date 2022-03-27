/**
 * 将UI组件和容器组件合并为一个文件
 */

// ----------------------------定义UI组件----------------------------
import React, { Component } from 'react';
import { connect } from "react-redux";
import { 
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction 
} from "../redux/actions/count";

class Count extends Component {
  // 增加
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(value*1);
  }
  // 减少
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(value*1);
  }
  // 当前求和为奇数时再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const { count } = this.props;
    if(count % 2 !== 0){
      this.props.increment(value*1);
    }
  }
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.incrementAsync(value*1, 500);
  }

  render() {
    return (
      <div>
        <h2>Count组件，下方组件人数为：{ this.props.personList.length }</h2>
        <h3>当前求和为：{ this.props.count }</h3>
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


// ----------------------------定义容器组件并暴露----------------------------
// 映射状态
const mapStateToProps = (state) => {
  return {
    count: state.count,
    personList: state.personList
  }
}
// 映射操作状态的方法
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
      dispatch(createIncrementAction(value));
    },
    decrement: (value) => {
      dispatch(createDecrementAction(value));
    },
    incrementAsync: (value, time) => {
      dispatch(createIncrementAsyncAction(value, time));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Count);