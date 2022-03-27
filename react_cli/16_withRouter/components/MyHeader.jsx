import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class MyHeader extends Component {
  /**
   * 只有路由组件才有history对象，一般组件的this.props当中没有history对象，不能使用history上的方法
   * 可以使用withRouter来解决这个问题
   */
  goForward = () => {
    this.props.history.goForward();
  }
  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="main-header-container">
        <h1>React Router Demo</h1>
        <button onClick={this.goForward}>前进</button>
        <button onClick={this.goBack}>后退</button>
      </div>
    )
  }
}
// 这里没有直接暴露MyHeader，而是使用withRouter函数来处理了一下当前组件
// withRouter加工之后的返回值是一个新的组件，返回的新组件和传入的组件的区别就在于，返回的新组件可以用路由的相关方法
// 真正暴露出去的是经过withRouter处理过后的组件
// 一般组件经withRouter处理之后，就可以使用this.props.history
export default withRouter(MyHeader);