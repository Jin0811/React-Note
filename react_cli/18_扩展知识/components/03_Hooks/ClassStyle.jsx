import React from 'react';
import ReactDOM from "react-dom";

// 类式组件
class Demo extends React.Component {
  state = {
    count: 0
  }

  myRef = React.createRef();

  // 组件挂载，开启定时器
  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState((state) => {
        return { count: state.count+1 }
      });
    }, 1000);
  }
  // 组件将要卸载，清除定时器
  componentWillUnmount(){
    clearInterval(this.timer);
  }

  // 增加
  add = () => {
    this.setState((state) => {
      return { count: state.count+1 }
    });
  }
  // 卸载组件
  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }
  // 提示
  show = () => {
    console.log(this.myRef.current.value);
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef}/>
        <h2>当前求和为：{ this.state.count }</h2>
        <button onClick={this.add}>加1</button>
        <button onClick={this.unmount}>卸载组件</button>
        <button onClick={this.show}>提示</button>
      </div>
    );
  }
}

export default Demo;