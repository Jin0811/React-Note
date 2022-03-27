/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

// 引入createStore，用于创建redux当中最为核心的store对象
// applyMiddleware用户使用中间件
// combineReducers合并多个reducer
import { createStore, applyMiddleware, combineReducers } from "redux";

// 引入为Count组件服务的reducer
import countReducer from "./reducers/count";
// 引入为Person组件服务的reducer
import personReducer from "./reducers/person";

// 引入redux-thunk用于支持异步action
import thunk from "redux-thunk";

// 合并多个reducer成为一个总的reducer
const allReducer = combineReducers({
  count: countReducer,
  personList: personReducer
});
export default createStore(allReducer, applyMiddleware(thunk));