/**
 * 该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
 * reducer函数会接到两个参数，分别为：之前的状态preState、动作对象action
 * 
 * reducer有两个作用：初始化状态、加工状态
 */

import { INCREMENT, DECREMENT } from "./constant";

const initState = 0; // 初始化状态
export default function countReducer(preState=initState, action){
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
