/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

// 引入createStore，用于创建redux当中最为核心的store对象
// applyMiddleware用户使用中间件
// combineReducers合并多个reducer
import { createStore, applyMiddleware } from "redux";

// 引入汇总之后的reducer
import allReducer from "./reducers/index";

// 引入redux-thunk用于支持异步action
import thunk from "redux-thunk";

export default createStore(allReducer, applyMiddleware(thunk));