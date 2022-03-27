/**
 * 该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
 * reducer函数会接到两个参数，分别为：之前的状态preState、动作对象action
 * 
 * reducer有两个作用：初始化状态、加工状态
 * 
 * reducer的第一次调用，是stroe自动触发的
 * 传递的preState是undefined
 * 传递的action当中的type是一串混淆过的字符串，为的是不跟switch当中的case重合，避免触发操作
 */

const initState = 0;
export default function countReducer(preState=initState, action){
  console.log(preState, action);
  const { type, data } = action;
  switch (type) {
    case 'increment':
      return preState + data;
    case 'decrement':
      return preState - data;
    default:
      return preState;
  }
}
