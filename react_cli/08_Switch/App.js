import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Test from './pages/Test/Test';
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
              <Route path="/home" component={Test} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * 当Route的path当匹配到一个路由时，不会停止，而是会继续匹配，匹配到n个路由，就会展示n个组件
 * 可以使用Switch来实现单一匹配，匹配到第一个时，就会停止，不会再继续往下匹配
 * 单个路由规则不需要使用Switch包裹，一般多个路由规则需要Switch
 */