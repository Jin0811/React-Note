import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// import Home from './Home';
// import About from './About';

// 路由懒加载
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export default class Demo extends Component {
  render() {
    return (
      <div className="app">
        <h2>React Router Demo</h2>
        <div className="container">
          <div className="links">
            <NavLink activeClassName="active-item" className="link-item" to="/home">home</NavLink>
            <NavLink activeClassName="active-item" className="link-item" to="/about">about</NavLink>
          </div>
          <div className="content">
            {/* 这里的fallback也可以指定为一个组件，这个组件不能使用懒加载 */}
            <Suspense fallback={<h1>Loading</h1>}>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
            </Suspense>
          </div>
        </div>
      </div>
    )
  }
}