import React, { Component } from 'react';
import qs from "querystring";

class Detail extends Component {
  state = {
    contentArr: [
      { id: '1', content: "内容一" },
      { id: '2', content: "内容二" },
      { id: '3', content: "内容三" },
    ]
  }

  render() {
    let { location: { search } } = this.props;
    let { id, title } = qs.parse(search.slice(1));
    const findResult = this.state.contentArr.find(item => item.id === id);
    return (
      <div>
        <p>ID: {id}</p>
        <p>Title: {title}</p>
        <p>Content: {findResult.content}</p>
      </div>
    )
  }
}

export default Detail;