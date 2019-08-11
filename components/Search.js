import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, TextInput } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text, Tab, Tabs } from 'native-base';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import MyWeb from './public/MyWeb.js'
import { WebView } from 'react-native-webview';//需要另外安装引入
import { Actions } from 'react-native-router-flux'
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            uri: 'https://news.sina.cn/?from=wap'
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.constainer}>
                <Header hasTabs searchBar rounded style={{ height: 54, width: '100%', backgroundColor: '#0079FF' }}
                    androidStatusBarColor='#0079FF'>
                    <StatusBar
                        barStyle={'light-content'}
                    ></StatusBar>
                    <Item>
                        <Icon name="arrow-back" onPress={this.igoBack} />
                        <TextInput
                            placeholder="Search"
                            style={{ width: '78%', height: 54, fontSize: 16, paddingLeft: 10 }}
                            onChangeText={(text) => this.setState({ text })}
                        ></TextInput>
                        <Icon name="search" onPress={this.iSearch} />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <ScrollableTabView
                    style={{ marginTop: 0, backgroundColor: '#0079FF', }}
                    initialPage={0}
                    tabBarActiveTextColor='#fff'
                    tabBarInactiveTextColor='#ddd'
                    tabBarUnderlineStyle={{ backgroundColor: '#fff', height: 2 }}
                    renderTabBar={() => <DefaultTabBar style={{ height: 36, color: '#aaa' }} />}

                >
                    <ScrollView tabLabel='百度'>
                        <WebView
                            //webview 就相当于一个浏览器
                            //source里面uri 就相当于地址栏的地址
                            //strContact拼接字符串 就是得到你输入的内容和网址拼接
                            source={{ uri: this.state.text && this.strContact(this.state.text, 0) }}
                            style={{ marginTop: 0, height: 5000 }}
                        />
                    </ScrollView>
                    <ScrollView tabLabel='头条'>
                        <WebView
                            source={{ uri: this.state.text && this.strContact(this.state.text, 1) }}
                            style={{ marginTop: 0, height: 5000 }}
                        />
                    </ScrollView>
                    <ScrollView tabLabel='新浪'>
                        <WebView
                            source={{ uri: 'https://sina.cn/index/feed?vt=4&pos=108&his=0' }}
                            style={{ marginTop: 0, height: 5000 }}
                        />

                    </ScrollView>

                    <ScrollView tabLabel='搜狐'>
                        <WebView
                            source={{ uri: 'http://m.sohu.com/ch/8?pvid=000115_3w_c' }}
                            style={{ marginTop: 0, height: 5000 }}
                        />

                    </ScrollView>

                </ScrollableTabView>

            </View>
        );
    }
    igoBack = () => {
        Actions.app();
    }
    iSearch = () => {
    }

    // 这里拼接了url字符串
    strContact = (str, i) => {
        let urls = [
            { front: 'http://m.baidu.com/sf/vsearch?pd=realtime&word=', back: '&tn=vsearch&sa=vs_tab&lid=10321955317981492947&ms=1&from=844b&atn=index&ssid=0&from=844b&uid=0&pu=usm@5,sz@1320_2001,ta@iphone_1_11.0_25_11.0&bd_page_type=1&baiduid=AD981B8F38843B6FECBD441436B04AE7&tj=__0_10_6' },
            { front: 'https://m.toutiao.com/search/?keyword=', back: '&pd=synthesis&source=recom_search&traffic_source=&original_source=&in_tfs=&in_ogs=' }
        ]
        return (urls[i].front + str + urls[i].back);
    }
}
const styles = StyleSheet.create(
    {
        constainer: {
            flex: 1
        },
        tabBox: {
            backgroundColor: '#fff'
        }
    }
)