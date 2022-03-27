import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
            <MyNavLink to="/home/a/b">home</MyNavLink>
            <MyNavLink to="/about/a/b">about</MyNavLink>
          </div>
          <div className="content">
            <Switch>
              <Route path="/home" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * 模糊匹配和精准匹配
 * 默认是模糊匹配的，path要求的一个都不能少，而且顺序要对
 * 即输入的路径必须要包含path要求的路径，并且要求顺序相同
 * 可以使用exact来开启精准匹配，一般慎重使用exact
 * 
 * 模糊匹配：
 * <MyNavLink to="/home/a/b">home</MyNavLink>
 * <Route path="/home" component={Home} />
 */