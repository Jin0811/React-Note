/**
 * 该文件专门为Count组件生成action对象
 * 
 * action有两种形式
 * 1、Object形式：是同步的action
 * 2、Function形式：是异步的action
 */

import { INCREMENT, DECREMENT } from "./constant";

// 同步action（返回值为一个对象）
export const createIncrementAction = (data) => {
  return { type: INCREMENT, data }
}

// 同步action（简写形式）
export const createDecrementAction = data => ({ type: DECREMENT, data })

// 异步action（返回值为一个函数）
export const createIncrementAsyncAction = (data, time) => {
  // store在调用这个返回的函数时，会传递dispatch进来
  return (dispatch) => {
    setTimeout(() => {
      // 先异步，异步完，使用同步去进行操作
      dispatch(createIncrementAction(data));
    }, time);
  }
}