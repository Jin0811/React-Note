import React, { Component, Fragment } from 'react';

/**
 * Fragment可以使得我们不用写一个真实的根节点，Fragment标签不会出现在页面当中
 * 如果只是为了省略根节点，也可以直接写一个空标签：<></>
 * 
 * 在遍历数据的时候，如果想省略标签，只能写Fragment，不能写空标签
 * 因为遍历数据时，React要求一个key的属性，但是空标签不能写任何属性
 * Fragment标签上只能写key属性，不能写其他属性
 */

class Demo extends Component {
  render() {
    return (
      <Fragment>
        Fragment可以使得我们不用写一个真实的根节点，Fragment标签不会出现在页面当中
      </Fragment>
    );
  }
}

export default Demo;