import React from 'react';
import ReactDOM from "react-dom";

/**
 * 函数式组件
 * Demo会执行1+n次，初始时和后续更新
 */
function Demo() {
  // React.useState返回一个数组，状态和更新状态的方法
  // React.useState(initValue) initValue参数就是初始的状态
  // 第一次初始化指定的值在内部会进行缓存
  const [ count, setCount ] = React.useState(0);
  const [ name, setName ] = React.useState("Tom");

  // 第二个参数是一个数组
  // 如果没有第二个参数，则是监测所有state
  // 写了第二个参数，但是为空数组，则是不监测任何state
  // 写了第二个参数，并且数组不为空，则监测指定的state
  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1 );
    }, 1000);

    // 这里返回的函数相当于componentWillUnmount
    return ()=>{
      clearInterval(timer);
    }
  }, []);

  function add(){
    setCount(count+1); // 写法一
    // setCount((count) => { return count + 1 }); // 写法二
  }
  function changeName(){
    let newName = name === "Tom" ? "Jack" : "Tom"; 
    setName(newName);
  }
  // 卸载组件
  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  const myRef = React.useRef();
  // 提示
  function show(){
    console.log(myRef.current.value);
  }
  return (
    <div>
      <input type="text" ref={myRef}/>
      <h2>当前求和为：{ count }</h2>
      <h2>名字为：{ name }</h2>
      <button onClick={add}>加1</button>
      <button onClick={changeName}>改名</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>提示</button>
    </div>
  );
}
export default Demo;