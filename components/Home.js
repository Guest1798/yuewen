import React, { Component } from 'react'
import {
    View,
    Dimensions,
    StyleSheet
} from 'react-native';


import ScrollableTabView,
{
    DefaultTabBar,
    ScrollableTabBar
} from 'react-native-scrollable-tab-view';


import { Container, Header, Content, Icon, List, ListItem, Left, Body, Right, Button, Thumbnail, Footer, FooterTab, } from 'native-base';
import MyHeader from './public/MyHeader.js'
import NewLists from './NewLists.js'

export default class Appmain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: [
                { num: 0, China: '热点', English: 'top' },
                { num: 1, China: '社会', English: 'shehui' },
                { num: 2, China: '国内', English: 'guonei' },
                { num: 3, China: '国际', English: 'guiji' },
                { num: 4, China: '娱乐', English: 'yule' },
                { num: 5, China: '体育', English: 'tiyu' },
                { num: 6, China: '军事', English: 'junshi' },
                { num: 7, China: '科技', English: 'keji' },
                { num: 8, China: '财经', English: 'caijing' },
                { num: 9, China: '时尚', English: 'shishang' }
            ],
        }

    }

    isDarkMod = (s) => {
        if (s == 'light-mode') {
            return (lightModeStyle.mainBgColor);
        } else {

            return (darkModeStyle.mainBgColor);
        }
    }

    render() {
        return (
            <Container >
                <MyHeader title={'悦闻'}></MyHeader>
                <View style={this.isDarkMod(this.props.theme)}>

                    <ScrollableTabView
                        initialPage={0}
                        // tabBarPosition ='overlayTop'
                        tabBarActiveTextColor='#0079FF'
                        tabBarInactiveTextColor='#222'
                        style={{ flex: 1, marginTop: 0, backgroundColor: 'rgba(0,0,0,0)', }}
                        tabBarTextStyle={{ fontSize: 14, marginLeft: 10, marginRight: 10 }}
                        tabBarUnderlineStyle={{ height: 2, backgroundColor: '#0079FF' }}
                        renderTabBar={() => <ScrollableTabBar style={{ elevation: 0, height: 36, }} tabStyle={{ height: 36, }} />}
                    >
                        {
                            this.state.types && this.state.types.map((item) => {
                                let newspie = (
                                    <View tabLabel={item.China} key={item.num} style={{ backgroundColor: 'rgba(0,0,0,0)', marginTop: 0 }}>
                                        {/* <NewLists eng={item.English}></NewLists> */}
                                    </View>
                                );
                                return newspie;
                            })
                        }
                    </ScrollableTabView>
                </View>
            </Container>
        );
    }
}
const darkModeStyle = StyleSheet.create({
    mainBgColor: {
        backgroundColor: '#434343',
        flex: 1,
    },
    mainFgColor: {
        color: '#dbdbdb',
        flex: 1,
    }
})
const lightModeStyle = StyleSheet.create({
    mainBgColor: {
        backgroundColor: '#fff',
        flex: 1,
    },
    mainFgColor: {
        color: '#000',
        flex: 1,
    }
})
