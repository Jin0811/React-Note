/**
 * UI组件：不能使用任何redux的api，只负责页面的呈现、交互等
 * 容器组件：赋值和redux通信，将结果交给UI组件
 * 
 * 创建一个容器组件：
 * connect(mapStateToProps, mapDispatchToProps)(CountUI)
 *  mapStateToProps     映射状态，是一个函数，返回值是对象
 *  mapDispatchToProps  映射操作状态的方法，返回值是一个对象
 * 
 * 备注：容器组件中的store是靠props传递进去的，而不是在容器组件当中直接引入的
 * 
 * 单纯的redux已经可以满足需求了，之所以使用react-redux，是为了将视图和redux分割开
 * 未使用react-redux：UI组件当中需要引入action和store，比较繁琐，不清晰
 * 使用react-redux：容器组件负责redux通信，UI组件负责页面呈现和交互，有关redux的状态和操作，都封装在了props当中
 */


// 引入UI组件 - Count
import CountUI from "../components/Count";
// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";
// 引入相关的actionCreater
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../redux/count_action";

// redux当中保存的状态
// a函数的返回值是一个对象
// 这个对象当中的key就作为传递给UI组件的props的key
// value就作为传递给UI组件props的value
// 本质为：<CountUI name='张三' age={18}></CountUI>
function mapStateToProps(state){
  return {
    count: state,
  }
}

// 操作状态的方法
// b函数的返回值是一个对象
// key-value会作为props传递给UI组件
// <CountUI increment={() => {}}></CountUI>
function mapDispatchToProps(dispatch){
  return {
    increment: (value) => {
      // 子组件，即UI组件调用此方法，这个时候需要通知redux进行相关操作
      dispatch(createIncrementAction(value));
    },
    decrement: (value) => {
      dispatch(createDecrementAction(value));
    },
    incrementAsync: (value, time) => {
      dispatch(createIncrementAsyncAction(value, time));
    }
  }
}


/**
 * 使用connect创建并暴露一个容器组件
 * connect在第一次调用时，需要传递两个参数
 *  1 redux当中保存的状态
 *  2 操作状态的方法
 */
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);