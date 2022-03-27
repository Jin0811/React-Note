import React, { Component } from "react";

class List extends Component {
  render() {
    let { users, isFirst, isLoading, err } = this.props;
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
