/**
 * 该文件用于汇总所有的reducer，汇总为一个总的reducer
 */

import { combineReducers } from "redux";

// 引入为Count组件服务的reducer
import countReducer from "./count";
// 引入为Person组件服务的reducer
import personReducer from "./person";

// 合并多个reducer成为一个总的reducer
const allReducer = combineReducers({
  count: countReducer,
  personList: personReducer
});

export default allReducer;