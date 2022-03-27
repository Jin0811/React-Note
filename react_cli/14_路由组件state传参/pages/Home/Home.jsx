import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Message from "./Message/Message";
import News from "./News/News";
import MyNavLink from "../../components/MyNavLink";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>

        <div className="links home-nav">
          <MyNavLink to="/home/message">Message</MyNavLink>
          <MyNavLink to="/home/news">News</MyNavLink>
        </div>

        <Switch>
          <Route path="/home/message" component={Message} />
          <Route path="/home/news" component={News} />
          <Redirect to="/home/message"></Redirect>
        </Switch>

      </div>
    )
  }
}