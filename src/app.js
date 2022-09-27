/*
 * @Author: 小石头
 * @Date: 2022-09-21 10:44:14
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-26 17:33:12
 * @Description:
 */

import { Component } from "react";
import { Provider } from "react-redux";

import store from './store/index';

import "./app.less";


class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
