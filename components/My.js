import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, ScrollView, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { Container, Button, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Icon, Switch, Spinner, } from 'native-base';
import MyHeader from './public/MyHeader.js'
import { Actions } from 'react-native-router-flux'


export default class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listlen: ["1", "2", "3", "4"],
            darkmode: false,
            modalVisible: false,
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
            <View>
                <MyHeader title={'我的'}></MyHeader>
                <ScrollView>
                    <View style={{ position: 'relative' }}>
                        <ImageBackground
                            source={require('../media/1.jpg')}
                            style={{ width: '100%', height: 240 }}>
                        </ImageBackground>
                        <View style={{ position: 'absolute', width: '100%', height: '70%', backgroundColor: 'rgba(255,255,255,0)', alignItems: 'center' }}>
                            <Image
                                style={{ width: 50, height: 50, alignSelf: 'center', marginTop: '20%' }}
                                source={require('../media/ic_launcher.png')}
                            ></Image>
                            <Text>happy</Text>
                        </View>
                        <View style={{ backgroundColor: "rgba(255,255,255,0)", position: 'absolute', bottom: 0, width: '100%', }}>
                            <Button style={{ backgroundColor: "rgba(255,255,255,0.6)", width: '100%', }}
                                onPress={() => {
                                    Actions.login();
                                }}>
                                <Body>
                                    <Text>注 册 登 录</Text>
                                </Body>
                            </Button>
                        </View>

                    </View>
                    <Container>
                        <Content style={this.isDarkMod(this.props.theme)}>
                            <ListItem icon onPress={() => {
                                this.setState({
                                    darkmode: !this.state.darkmode
                                });
                                this.props.handleTheme('dark' ? this.state.darkmode : 'light');
                            }}>
                                <Left>
                                    <Button style={{ backgroundColor: "#222233" }}>
                                        <Icon active name="moon" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>夜晚模式</Text>
                                </Body>
                                <Right>
                                    <Switch
                                        value={this.state.darkmode} />
                                </Right>
                            </ListItem>

                            <ListItem icon onPress={
                                () => {
                                    Actions.edit();
                                }
                            }>
                                <Left>
                                    <Button style={{ backgroundColor: "#5a1ffb" }}>
                                        <Icon active name="create" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>修改</Text>
                                </Body>
                                <Right>
                                    <Text></Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>

                            <ListItem icon onPress={() => {
                                this.setModalVisible(true);
                            }}>
                                <Left>
                                    <Button style={{ backgroundColor: "#007AFF" }}>
                                        <Icon active name="settings" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>设置</Text>
                                </Body>
                                <Right>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => {
                                Actions.test();
                            }}>
                                <Left>
                                    <Button style={{ backgroundColor: "#ffe125" }}>
                                        <Icon active name="alert" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>关于</Text>
                                </Body>
                            </ListItem>
                        </Content>
                    </Container>
                </ScrollView>
                {/* 模态框 */}
                <View style={{ marginTop: 0, }}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}
                    >
                        <View style={{ marginTop: 0 }}>
                            <View >
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}
                                >
                                    <Button iconRight light
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}
                                    >
                                        <Text style={{ marginLeft: 20 }}>设置</Text>
                                        <Icon style={{ marginRight: 20, color: "black" }} name='arrow-round-down' />
                                    </Button>
                                </TouchableHighlight>
                                <ListItem icon>
                                    <Left>
                                        <Button style={{ backgroundColor: "#007AFF" }}>
                                            <Icon active name="close-circle-outline" />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Text>清除缓存</Text>
                                    </Body>
                                    <Right>
                                        <Spinner size={24} animating={false} color='#0079FF'></Spinner>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Button style={{ backgroundColor: "#FF9501" }}>
                                            <Icon active name="appstore" />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Text>更新</Text>
                                    </Body>
                                    <Right>
                                        <Spinner size={24} animating={false} color='#0079FF'></Spinner>
                                    </Right>
                                </ListItem>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        )
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
}

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