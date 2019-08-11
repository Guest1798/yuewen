import React, { Component } from 'react';
import {
    StyleSheet,
    ToastAndroid,
    BackHandler,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Icon, } from 'native-base';
// import AsyncStorage from '@react-native-community/async-storage';//引入AsyncStorage存储应用数据
import Home from './Home.js';
import Videonews from './VideoNews.js';
import My from './My.js';
var firstClick = 0;
export default class Appmain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectTab: 0,
            selectedTab: 'my',
            darkmode: false,
        }
        this.handleBack = this.handleBack.bind(this);
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
    }
    componentWillReceiveProps() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
    }

    handleBack = () => {
        var timestamp = (new Date()).valueOf();
        if (timestamp - firstClick > 1500) {
            firstClick = timestamp;
            ToastAndroid.show('再按一次退出', ToastAndroid.SHORT);
            return true;
        } else {
            this.exitApp();
            return false;
        }
    }
    exitApp() {
        BackHandler.exitApp();
    }
    handleThemeMod = (mod) => {
        if (mod) {
            this.setState({
                darkmode: false
            })
        } else {
            this.setState({
                darkmode: true
            })
        }
    }
    render() {
        return (

            <TabNavigator animationEnabled
                tabBarStyle={this.tabBarStyleChanged(this.state.darkmode)}
            ><TabNavigator.Item
                animationEnabled
                selected={this.state.selectedTab === 'home'}
                title="主页"
                activeTintColor='#000'
                renderIcon={() => <Icon name="home" style={{ fontSize: 24, color: '#888', }}></Icon>}
                renderSelectedIcon={() => <Icon name="home" style={{ fontSize: 26, color: '#0079FF' }} />}
                onPress={() => this.setState({ selectedTab: 'home' })}
            >
                    {/* <Home></Home> */}
                    {this.renderApp('home')}
                </TabNavigator.Item>


                <TabNavigator.Item
                    animationEnabled
                    selected={this.state.selectedTab === 'videonews'}
                    title="视频新闻"
                    renderIcon={() => <Icon name="videocam" style={{ fontSize: 24, color: '#888' }} />}
                    renderSelectedIcon={() => <Icon name="videocam" style={{ fontSize: 26, color: '#0079FF' }} />}
                    onPress={() => this.setState({ selectedTab: 'videonews' })}
                >
                    {/* <Videonews></Videonews> */}
                    {this.renderApp('videonews')}
                </TabNavigator.Item>


                <TabNavigator.Item
                    animationEnabled
                    selected={this.state.selectedTab === 'my'}
                    title="我的"
                    renderIcon={() => <Icon name="person" style={{ fontSize: 24, color: '#888' }} />}
                    renderSelectedIcon={() => <Icon name="person" style={{ fontSize: 26, color: '#0079FF' }} />}
                    onPress={() => this.setState({ selectedTab: 'my' })}
                >
                    {/* <My></My> */}
                    {this.renderApp('my')}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
    renderApp = (comp) => {
        if (comp == 'home') {
            if (this.state.darkmode) {
                return <Home handleTheme={this.handleThemeMod} theme={'dark-mode'}></Home>
            } else {
                return <Home theme={'light-mode'}></Home>
            }
        }
        else if (comp == 'videonews') {
            if (this.state.darkmode) {
                return <Videonews theme={'dark-mode'}></Videonews>
            } else {
                return <Videonews theme={'light-mode'}></Videonews>
            }
        } else {
            if (this.state.darkmode) {
                return <My handleTheme={this.handleThemeMod} theme={'dark-mode'}></My>
            } else {
                return <My handleTheme={this.handleThemeMod} theme={'light-mode'}></My>
            }
        }
    }

    tabBarStyleChanged = (sta) => {
        if (sta) {
            return ({ backgroundColor: '#333' })
        } else {
            return ({ backgroundColor: '#f6f6f6' })
        }
    }
}


const tabsty = StyleSheet.create(
    {
        darktabbar: {
            backgroundColor: '#333'
        },
        lighttabbar: {
            backgroundColor: '#f6f6f6'
        }
    }
)

