import React, { Fragment } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';

import Appmain from './components/Appmain.js'
import Search from './components/Search.js'
import NewsDetail from './components/NewsDetail.js'
import Login from './components/yc/Login.js'
import Register from './components/yc/Register.js'
import GoApp from './components/yc/GoApp.js'
import EditInfo from './components/EditInfo.js'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Router >
        <Stack key='root' headerLayoutPreset='center'>
          {/* 主要app */}
          <Scene hideNavBar={true} key='app' component={Appmain}></Scene>
          {/* search */}
          <Scene hideNavBar={true} key='search' component={Search}></Scene>
          {/* 新闻详情 */}
          <Scene
            navBarButtonColor='#fff'
            title='新闻详情'
            navigationBarStyle={{ height: 54, backgroundColor: '#0079FF', }}
            key='newsdetail'
            component={NewsDetail}>
          </Scene>
          {/* 注册登录 */}
          <Scene hideNavBar={true} key='login' component={Login}></Scene>
          <Scene hideNavBar={true} key='register' component={Register}></Scene>
          {/* 关于app */}
          <Scene
            navTransparent
            hideNavBar={true} key='test' component={GoApp}>
          </Scene>
          <Scene
            navBarButtonColor='#fff'
            title='修改信息'
            titleStyle={{ fontSize: 18 }}
            navigationBarStyle={{ height: 48, backgroundColor: '#0079FF', }}
            key='edit' component={EditInfo}></Scene>
        </Stack>
      </Router>
    );
  }
}



