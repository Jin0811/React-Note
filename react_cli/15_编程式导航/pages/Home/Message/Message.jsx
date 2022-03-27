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
  
  /**
   * this.props.history.go() 前进或后退多少步
   * this.props.history.goBack() 后退一步
   * this.props.history.goForward() 前进一步
   * 
   * this.props.history.push() push模式跳转
   * this.props.history.replace() replace模式跳转
   */

  // push跳转
  handlePush = (id, title) => {
    this.props.history.push("/home/message/detail", { id, title });
  }
  // replace跳转
  handleReplace = (id, title) => {
    // this.props.history.replace(`/home/message/detail/${id}/${title}`); // 传递params参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`); // 传递search参数

    // 传递state参数
    this.props.history.replace("/home/message/detail", { id, title });
  }

  render() {
    return (
      <div>
        <div className="message-nav">
          <h3>导航区域</h3>
          { this.state.messageArr.map((item) => {
              return (
                <div key={item.id}>
                  <Link to={{ pathname: "/home/message/detail", state: { id:item.id, title:item.title } }}>{ item.title }</Link>
                  &nbsp;&nbsp;<button onClick={() => { this.handlePush(item.id, item.title) }}>Push</button>
                  &nbsp;&nbsp;<button onClick={() => { this.handleReplace(item.id, item.title) }}>Replace</button>
                </div>
              )
            }) 
          }
        </div>

        <div className="message-content">
          <h3>详情区域</h3>
          <Route path="/home/message/detail" component={Detail}></Route>
        </div>
      </div>
    )
  }
}

export default Message;