import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
            {/* activeClassName的值默认为active，可以使用activeClassName来进行修改 */}
            {/* 
              <NavLink activeClassName="active-item" className="link-item" to="/home">home</NavLink>
              <NavLink activeClassName="active-item" className="link-item" to="/about">about</NavLink> 
            */}

            {/* MyNavLink是封装的NavLink */}
            <MyNavLink to="/home">home</MyNavLink>
            <MyNavLink to="/about">about</MyNavLink>
          </div>
          <div className="content">
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </div>
    )
  }
}