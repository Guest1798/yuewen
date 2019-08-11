import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Modal,
    Text,
    TouchableHighlight,
    Dimensions,
    BackHandler,
} from 'react-native';


import { Header, Body, Right, Button, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux'

var { height, width } = Dimensions.get('window');

export default class MyHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            windowHeight: height
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    exitApp() {
        BackHandler.exitApp();
    }

    render() {
        return (
            <View>
                {/* 头部标题栏 */}
                <Header style={{ height: 48, width: '100%', backgroundColor: '#0079FF' }}
                    noShadow={false}
                    androidStatusBarColor="#0079FF"
                >
                    <StatusBar
                        barStyle={'light-content'}
                    ></StatusBar>
                    <Body>
                        <Title style={{ color: '#fff', paddingLeft: 20 }}>{this.props.title}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.goSearch}>
                            <Icon name='search' style={{ color: '#fff' }} />
                        </Button>
                        <Button transparent
                            onPress={() => {
                                this.setModalVisible(true);
                            }}>
                            <Icon name='more' style={{ color: '#fff' }} />
                        </Button>
                    </Right>
                </Header>

                {/* 模态框 */}
                <View transparent style={{ marginTop: 0, }}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        style={{ height: 100 }}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}
                    >
                        <View style={{ marginTop: 0, }}>
                            <View style={{ marginTop: this.state.windowHeight - 180, shadowColor: '#000' }}>
                                <Button iconLeft light
                                    style={{ height: 80, borderBottomColor: '#ccc', borderBottomWidth: 1, }}
                                    onPress={() => {
                                        this.exitApp();
                                    }}
                                >
                                    <Icon style={{ marginLeft: 20 }} name='exit' />
                                    <Text style={{ marginRight: 20 }}>退出应用</Text>
                                </Button>
                                <Button iconLeft light
                                    style={{ height: 80, }}
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}
                                >
                                    <Icon style={{ marginLeft: 20 }} name='close' />
                                    <Text style={{ marginRight: 20 }}>取消</Text>
                                </Button>
                            </View>
                        </View>
                    </Modal>
                </View>

            </View>

        );
    }
    goSearch = () => {
        Actions.search();
    }
}