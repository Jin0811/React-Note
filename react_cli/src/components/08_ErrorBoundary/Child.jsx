import React, { Component } from 'react';

class Child extends Component {

  state = {
    // users: [
    //   { id: "001", name: "张三", age: 18 },
    //   { id: "002", name: "李四", age: 19 },
    //   { id: "003", name: "王五", age: 20 },
    // ]
    users: "111"
  }

  render() {
    return (
      <div className="child">
        <h2>Child组件</h2>
        {
          this.state.users.map(item => {
            return <h4 key={item.id}>{ item.name } -- { item.age }</h4>
          })
        }
      </div>
    );
  }
}

export default Child;