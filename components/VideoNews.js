import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
} from 'react-native';
import { Container, Header, Content, Icon, List, ListItem, Left, Body, Title, Right, Button, Thumbnail, Footer, FooterTab, } from 'native-base';

import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
import MyHeader from './public/MyHeader.js'
var { height, width } = Dimensions.get('window');
export default class VideoNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listlen: ["1", "2", "3"],
            videofitwidth: width,
            videos: [
                { title: '河南：女孩送水 致敬烈日下执勤交警', origin: '2019-8-8 9:22:52    安徽电视台', src: 'http://flv4mp4.people.com.cn/videofile6/AnHuiHD/2019/08/08/AnHuiHD_3000000_20190808_32926715_0_114_android_c.mp4' },
                { title: '湖北武汉：地铁站上演感人一幕 50秒安慰让她蓄满能量', origin: '2019-8-8 9:22:52    安徽电视台', src: 'http://flv4mp4.people.com.cn/videofile6/AnHuiHD/2019/08/08/AnHuiHD_3000000_20190808_32926857_0_114_android_c.mp4' },
                { title: '伸向学生书包的“黑手”', origin: '2019-8-8 9:21:53    辽宁电视台', src: 'http://flv4mp4.people.com.cn/videofile6/LiaoNingTV/2019/08/08/LiaoNingTV_1500000_20190808_32927060_0_113.mp4' },
                { title: '四川广元：装载机过桥遇洪水 8人落水其中3人死亡', origin: '2019-8-8 9:21:53    辽宁电视台', src: 'http://flv4mp4.people.com.cn/videofile6/LiaoNingTV/2019/08/08/LiaoNingTV_1500000_20190808_32926835_0_113.mp4' },
                { title: '以为是门 女孩连撞三次玻璃墙', origin: '2019-8-8 9:21:53    辽宁电视台', src: 'http://flv4mp4.people.com.cn/videofile6/LiaoNingTV/2019/08/08/LiaoNingTV_1500000_20190808_32927373_0_113.mp4' },
                { title: '陕西甘泉：5名初三生溺亡 官方称考完试到河道玩发生意外', origin: '2019-8-8 9:21:53    辽宁电视台', src: 'http://flv4mp4.people.com.cn/videofile6/LiaoNingTV/2019/08/08/LiaoNingTV_1500000_20190808_32926854_0_113.mp4' },
                { title: '3岁儿童飞机上突发身体不适 南航武汉飞银川航班紧急折返', origin: '2019-8-8 9:21:53    辽宁电视台', src: 'http://flv4mp4.people.com.cn/videofile6/LiaoNingTV/2019/08/08/LiaoNingTV_1500000_20190808_32926879_0_113.mp4' },
                { title: '朝鲜：金正恩观摩新型战术导弹发射', origin: '2019-8-7 23:15:15    央视网', src: 'http://flv4mp4.people.com.cn/videofile6/CCTVNEWS/2019/08/07/CCTVNEWS_1500000_20190807_32924602_0_113.mp4' },
                { title: '与台风赛跑的36个时辰', origin: '2019-8-6 16:27:20    人民网-人民视频', src: 'http://flv4mp4.people.com.cn/videofile6/pvmsvideo/2019/8/6/ChenQiuNan_d8a2d8c8316468ae08a4b7afb4beaba2.mp4' },
                { title: '大修十二时辰 ——揭秘铁路硬核机械化部队', origin: '2019-8-7 10:12:24    人民网-人民视频', src: 'http://flv4mp4.people.com.cn/videofile6/pvmsvideo/2019/8/7/ChenQiuNan_23cdf0adb9b0484f32bfca756d83fb2f.mp4' },
                { title: '军工很酷 60秒别眨眼', origin: '2019-8-1 12:11:06    人民网-人民视频', src: 'http://flv4mp4.people.com.cn/videofile6/pvmsvideo/2019/8/1/ChenQiuNan_37050c77807b7d9d3841b6fd8aabe53e_android_c.mp4' },
                { title: '警方深夜水陆空三栖抓捕 6小时不到破获连环抢劫案', origin: '2019-7-26 11:09:28    人民网-人民视频', src: 'http://flv4mp4.people.com.cn/videofile6/pvmsvideo/2019/7/26/ChenQiuNan_ec1f5234e20e47dc59d5990f232c351c.mp4' },
                { title: '时代阅读丨演员岳红朗读《新觉醒时代》', origin: '2019-7-19 16:19:38    人民网-人民视频', src: 'http://flv4mp4.people.com.cn/videofile6/pvmsvideo/2019/7/19/ChenQiuNan_8c043e602cfe2e67af4d9ddb827de186.mp4' }
            ]
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
        return (<View style={{ flex: 1 }}>
            <MyHeader title={'视频'}></MyHeader>
            <ScrollView style={this.isDarkMod(this.props.theme)}>
                {this.state.videos.map((item, idx) => {
                    return <List key={idx} >
                        <ListItem itemDivider style={this.isDarkMod(this.props.theme)}>
                            <VideoPlayer
                                thumbnail={{ uri: 'http://v.people.cn/img/MAIN/2018/09/118648/images/logo02.jpg' }}
                                video={{ uri: item.src }}
                                style={{ width: this.state.videofitwidth - 36 }}
                                resizeMode='contain'
                                playInBackground={false}
                            />
                        </ListItem>
                        <ListItem>
                            <View style={{ flexDirection: 'column', flexWrap: "wrap" }}>
                                <View>
                                    <Text>{item.title}</Text>
                                </View>
                                <View style={{ marginTop: 10 }}>
                                    <Text style={{ fontSize: 12, }}>{item.origin}</Text>
                                </View>
                            </View>
                        </ListItem>
                    </List>

                })}
            </ScrollView>
        </View>
        );
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
        height: 192,
        width: 320,
        backgroundColor: '#000',
        padding: 0,
    },
})

const darkModeStyle = StyleSheet.create({
    mainBgColor: {
        backgroundColor: '#434343'
    },
    mainFgColor: {
        color: '#dbdbdb'
    }
})
const lightModeStyle = StyleSheet.create({
    mainBgColor: {
        backgroundColor: '#fff'
    },
    mainFgColor: {
        color: '#000'
    }
})
