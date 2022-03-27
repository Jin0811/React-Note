在6版本的当中，如果想要实现link高亮效果
```js
// 方法一
// 编写一个active的className 默认会添加上active样式

// 方法二：
<NavLink style={({ isActive }) => { return { color: isActive ? "royalblue" : "#000" } }} className="link-item" to="/home">home</NavLink>
<NavLink style={({ isActive }) => { return { color: isActive ? "royalblue" : "#000" } }} className="link-item" to="/about">about</NavLink>

// 简化封装一下，可以写成这样：
generateStyle = ({ isActive }) => {
  if(isActive){
    return {
      color: "#fff",
      background: "royalblue"
    }
  }
}

<NavLink style={ info => this.generateStyle(info) } className="link-item" to="/home">home</NavLink>
<NavLink style={ info => this.generateStyle(info) } className="link-item" to="/about">about</NavLink>

// 也可以使用这种方法来指定激活状态下的className
<NavLink className={({ isActive }) => isActive ? "red" : "blue"} />
```


BrowserRouter 和 HashRouter 的区别
1 低层原理不一样
  BrowserRouter使用的是H5的history Api，不兼容IE9及以下版本
  HashRouter使用的是url的哈希值
2 path的表现形式不一样
  BrowserRouter的路径当中没有#
  HashRouter的路径当中有#
3 刷新后对路由的state参数的影响不一样
  BrowserRouter在刷新页面之后，传递给路由组件的state参数不会丢失
  HashRouter在刷新页面之后，则会丢失state参数

备注：HashRouter可以用于解决一些路径错误相关的问题