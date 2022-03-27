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
 * 
 * 注意：使用react-redux之后，index.js当中就无需再手动进行检测了，react-redux已经作了检测
 */

// 引入UI组件 - Count
import CountUI from "../components/Count";
// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";
// 引入相关的actionCreater
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../redux/count_action";


// 映射状态
const mapStateToProps = (state) => {
  return {
    count: state,
  }
}

// 映射操作状态的方法
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
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

// 基础写法（推荐这种方法，比较清晰明了）
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);

// 精简写法一
// export default connect(
//   state=>({ count: state }),
//   dispatch=>({
//     increment: value => dispatch(createIncrementAction(value)),
//     decrement: value => dispatch(createDecrementAction(value)),
//     incrementAsync: (value, time) => dispatch(createIncrementAsyncAction(value, time))
//   })
// )(CountUI);

// 精简写法二（mapDispatchToProps直接传递一个对象）
// 这里mapDispatchToProps传递了一个对象，对象key-value的value是一个action
// 这里只需要写相应的action，无需进行dispatch分发，是因为react-redux会自动进行分发
// export default connect(
//   state=>({ count: state }),
//   {
//     increment: createIncrementAction,
//     decrement: createDecrementAction,
//     incrementAsync: createIncrementAsyncAction
//   }
// )(CountUI);
