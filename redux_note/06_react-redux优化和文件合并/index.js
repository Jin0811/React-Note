import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/**
 * Provider是react-redux当中提供的一个组件
 * 被Provider包裹的组件，以及后代组件，只要是容器组件，都会接收到store
 */