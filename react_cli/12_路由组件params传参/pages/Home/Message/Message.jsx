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
                  {/* 传递参数 */}
                  <Link to={`/home/message/detail/${item.id}/${item.title}`}>{ item.title }</Link>
                </div>
              )
            }) 
          }
        </div>

        <div className="message-content">
          <h3>详情区域</h3>
          {/* 声明接收参数 */}
          <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
        </div>
      </div>
    )
  }
}

export default Message;