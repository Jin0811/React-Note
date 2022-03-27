import React, { Component } from 'react';

class Detail extends Component {
  state = {
    contentArr: [
      { id: '1', content: "内容一" },
      { id: '2', content: "内容二" },
      { id: '3', content: "内容三" },
    ]
  }

  render() {
    let { match: { params: { id, title } } } = this.props;
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