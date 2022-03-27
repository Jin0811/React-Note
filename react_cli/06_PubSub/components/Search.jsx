import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

class Search extends Component {

  // 搜索的回调
  search = () => {
    const { keyWordElement: { value } } = this; // 连续解构赋值
    PubSub.publish("update", { isFirst: false, isLoading: true });
    let url = `/apiPrefix/search/users?q=${value}`;
    axios.get(url).then(res => {
      PubSub.publish("update", { isLoading: false, users: res.data.items });
    }, error => {
      PubSub.publish("update", { isFirst: false, err: error.message });
    });
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={el => this.keyWordElement = el} type="text" placeholder="enter the name you search" />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}

export default Search;
