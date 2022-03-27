import React, { Component } from 'react';
import './App.css';


// import Demo from "./components/01_setState/index";

// import Demo from "./components/02_lazyLoad/index";

// import Demo from "./components/03_Hooks/ClassStyle";
// import Demo from "./components/03_Hooks/FunStyle";

// import Demo from "./components/04_Fragment/index";

// import Demo from "./components/05_Context/index";

// import Demo from "./components/06_PureComponent/index";

// import Demo from "./components/07_renderProps/index";

import Demo from "./components/08_ErrorBoundary/index";


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Demo></Demo>
      </div>
    )
  }
}
