import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator, TouchableHighlight, Image, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
export default class NewLists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newLists: [],
            indexPage: 'top',
            keys: ['0885819bf492cb78d2635f1b09ba2f2c', '17363d3c3fa06f2c9d9e9b00e0fa2d12'],
            reqindex: 0
        }
    }

    render() {
        return <FlatList
            onPress={() => { }}
            data={this.state.newLists}
            keyExtractor={(item, i) => i} // 解决 key 问题
            renderItem={({ item }) => this.renderItem(item)} // 调用方法，去渲染每一项
            ItemSeparatorComponent={this.renderSeparator} //渲染分割线的属性方法
        />
    }
    getNewsLists = () => {
        let url = "http://v.juhe.cn/toutiao/index?type=" + this.state.indexPage + "&key=" + this.state.keys[1];
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                if (data == null) {
                    alert('无法请求数据');
                    return;
                }
                else {

                    this.setState((state) => {
                        return {
                            newLists: data.result.data
                        }
                    })
                }
            })
    }

    getNextNews = () => {
        this.setState({
            indexPage: this.props.eng
        }, () => {
            this.getNewsLists()
        })
    }
    putNews() {
        if (item.thumbnail_pic_s02) {
            return
        }
    }

    renderItem = (item) => {
        if (item.thumbnail_pic_s02) {
            return <TouchableHighlight underlayColor="#fff" onPress={
                () => {
                    Actions.newsdetail({ duri: item.url })
                }
            }>
                <View style={{ flexDirection: 'row', padding: 8 }}>
                    <View style={{ justifyContent: 'space-around' }}>
                        <View style={styles.contain}>
                            <View>
                                <Text style={styles.newTitl}>{item.title}</Text>
                                <View style={styles.imgcontain}>
                                    <Image source={{ uri: item.thumbnail_pic_s }} style={styles.imagestyle}></Image>
                                    <Image source={{ uri: item.thumbnail_pic_s02 }} style={styles.imagestyle}></Image>
                                    <Image source={{ uri: item.thumbnail_pic_s03 }} style={styles.imagestyle}></Image>
                                </View>
                                <View style={styles.imgcontain}>
                                    <Text style={styles.newAudo}>{item.author_name}</Text>
                                    <Text style={styles.newTime}>{item.date}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        } else {
            return <TouchableHighlight underlayColor="#fff" onPress={
                () => {
                    Actions.newsdetail({ duri: item.url })
                }
            }>
                <View style={{ flexDirection: 'row', padding: 8 }}>
                    <View style={{ justifyContent: 'space-around' }}>
                        <View style={styles.contain}>
                            <View style={styles.imgcontain}>
                                <View style={{ width: 220 }}>
                                    <Text>{item.title}</Text>
                                    <View style={styles.second_newAudo}>
                                        <Text style={styles.newAudo}>{item.author_name}</Text>
                                        <Text style={styles.newTime}>{item.date}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Image style={{ height: 80, width: 110 }} source={{ uri: item.thumbnail_pic_s }}></Image>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        }

    }
    //渲染每一条数据和数据之间的分割线的方法
    renderSeparator = () => {
        return <View style={{ borderTopColor: '#ccc', borderTopWidth: 1, marginLeft: 10, marginRight: 10 }}></View>
    }
    componentDidMount() {
        this.getNextNews();
    }
}

const styles = StyleSheet.create({
    contain: {
        paddingLeft: 6,
        paddingRight: 6
    },
    imgcontain: {
        flexDirection: "row"
    },
    imagestyle: {
        width: '32.8%',
        height: 80,
        marginRight: 4
    },
    newTitl: {
        fontSize: 16
    },
    newAudo: {
        fontSize: 10,
        marginTop: 8
    },
    newTime: {
        fontSize: 10,
        marginLeft: 10,
        marginTop: 8
    },
    second_newAudo: {
        flexDirection: "row",
        marginTop: 28
    }
})