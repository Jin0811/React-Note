import { ADD_PERSON } from "../constant";

const initState = [];
export default function personReducer(preState=initState, action){
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      // preState.push(data);
      // return preState;
      return [data, ...preState];
    default:
      return preState;
  }
}

/**
 * 注意：
 * 
 * preState.push(data);
 * return preState;
 * 
 * 上面的两行代码并不会起作用，数据会添加到数组当中，但是并不会引起页面的变化
 * 这是因为redux会比较原先的值和返回的值，如果相同就不会再进行渲染
 * 这里的preState是一个数组（引用数据类型），进行了push之后，内存地址并没有发生变化，也就不会引起react的渲染
 * 
 * redux只是进行了浅比较，虽然push改变了数组的值，但是数组的的内存指向地址没有发生变化，redux就认为没有发生改变
 * 可以使用展开运算符来生成一个新的数组
 * 
 * 
 * 纯函数：一类特殊的函数，只要是相同的输入（实参），必定得到相同的输入（返回值）
 * 纯函数必须遵守以下一些约束：
 * 1 不得改写参数数据
 * 2 不会产生任何副作用，例如网络请求、输入和输入设备
 * 3 不能调用Date.now()或者Math.random()等不纯的方法
 * 
 * redux的reducer函数必须是一个纯函数
 */