import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import MyNavLink from './components/MyNavLink';
import MyHeader from "./components/MyHeader";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <MyHeader></MyHeader>
        <div className="container">
          <div className="links">
            <MyNavLink to="/home">home</MyNavLink>
            <MyNavLink to="/about">about</MyNavLink>
          </div>
          <div className="content">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />

              <Redirect to="/home"></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * 嵌套路由
 */