import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import MyNavLink from './components/MyNavLink';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>React Router Demo</h2>
        <div className="container">
          <div className="links">
            <MyNavLink to="/home">home</MyNavLink>
            <MyNavLink to="/about">about</MyNavLink>
          </div>
          <div className="content">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />

              {/*
                Redirect用来兜底，进行重定向
                一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
              */}
              <Redirect to="/home"></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
