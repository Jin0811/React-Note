import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      // <MyNavLink to="/home" children="home" />
      // <NavLink activeClassName="active-item" className="link-item" { ...this.props } />
      
      <NavLink activeClassName="active-item" className="link-item" { ...this.props }>{ this.props.children }</NavLink>
    )
  }
}