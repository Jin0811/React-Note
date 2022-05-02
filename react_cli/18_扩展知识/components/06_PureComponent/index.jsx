import React, { PureComponent } from 'react';

// PureComponent会进行浅比较，如果内存地址一样，则会造成页面无法更新的问题
// 因为PureComponent判断前后一致，直接返回了false
// PureComponent可以帮我们自动进行阀门的控制，是因为PureComponent重写了shouldComponentUpdate方法

class Parent extends PureComponent {
  state = {
    carName: "奔驰"
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   // console.log(this.props, this.state);
  //   // console.log(nextProps, nextState); // 接下来要变化的目标props和目标state
  //   let flag = this.state.carName === nextState.carName;
  //   return !flag;
  // }

  changeCar = () => {
    // this.setState({ carName: "宝马" });
    // this.setState({});

    let obj = this.state;
    obj.carName = "宝马";
    this.setState(obj);
  }
  render() {
    console.log("Parent -- render");
    let { carName } = this.state;
    return (
      <div className="parent">
        <h1>Parent</h1>
        <p>车名为：{ carName }</p>
        <button style={{marginBottom: "20px"}} onClick={this.changeCar}>点击换车</button>
        <Child carName="奥拓"></Child>
      </div>
    );
  }
}

class Child extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState){
  //   let flag = this.props.carName === nextProps.carName;
  //   return !flag;
  // }

  render() {
    console.log("Child -- render");
    return (
      <div className="child">
        <h2>Child</h2>
        <p>{ this.props.carName }</p>
      </div>
    );
  }
}

export default Parent;