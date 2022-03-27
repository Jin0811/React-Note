import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from "./Detail";

class Message extends Component {
  state = {
    messageArr: [
      { id: '1', title: "消息1" },
      { id: '2', title: "消息2" },
      { id: '3', title: "消息3" },
    ]
  }

  render() {
    return (
      <div>
        <div className="message-nav">
          <h3>导航区域</h3>
          { this.state.messageArr.map((item) => {
              return (
                <div key={item.id}>
                  {/* 传递state参数 */}
                  {/* 路由默认是push模式，可以使用 replace={true} 来开启replace模式 */}
                  <Link replace to={{ pathname: "/home/message/detail", state: { id:item.id, title:item.title } }}>{ item.title }</Link>
                </div>
              )
            }) 
          }
        </div>

        <div className="message-content">
          <h3>详情区域</h3>
          {/*
            state参数无需声明
            传递的state参数，刷新页面并不会丢失参数，底层是把数据记录在了浏览器的history对象上

            params参数和search参数，都会将参数显示在浏览器的地址栏当中，但是state参数不会显示
            三种参数，刷新页面都不会丢失参数，但是底层实现的不相同
          */}
          <Route path="/home/message/detail" component={Detail}></Route>
        </div>
      </div>
    )
  }
}

export default Message;