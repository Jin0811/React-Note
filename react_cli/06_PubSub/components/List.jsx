import React, { Component } from "react";
import PubSub from "pubsub-js";

class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: "",
  }

  // 组件挂载完成，订阅消息
  componentDidMount(){
    this.token = PubSub.subscribe("update", (msgName, data) => {
      this.setState(data);
    });
  }
  // 组件将要卸载时，取消订阅
  componentWillUnmount(){
    PubSub.unsubscribe(this.token);
  }

  render() {
    let { users, isFirst, isLoading, err } = this.state;
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用</h2> :
          isLoading ? <h2>Loading...</h2> :
          err ? <h2 style={{ color:"red" }}>{ err }</h2> :
          users.map((item) => {
            return (
              <div className="card" key={item.id}>
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img
                    alt="img"
                    src={item.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{ item.login }</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default List;
