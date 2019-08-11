import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TextInput, StyleSheet, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Icon } from 'native-base';
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            text1: '',
            language: 'dd'
        }
    }

    render() {
        return (<View>
            <StatusBar
                backgroundColor='rgba(0,0,0,0)'
                translucent={true}
                barStyle={'light-content'}
            ></StatusBar>
            <ImageBackground source={require('../../media/2.jpg')} style={{ width: '100%', height: '100%' }}>
                <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <View><Text style={{ fontSize: 40, fontFamily: 'verdana', color: '#fff', marginLeft: '40%', marginTop: '28%' }}>注册</Text></View>
                    <View style={styles.contain}>
                        <Text style={{ marginLeft: 15, color: '#fff' }}>USERNAME</Text>
                        <TextInput
                            placeholder="请输入账号"
                            style={{ paddingLeft: 20, height: 40, borderColor: '#fff', borderWidth: 2, borderRadius: 20, backgroundColor: 'rgba(245,255,250,0.7)' }}
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                        <Text style={{ marginLeft: 15, marginTop: 40, color: '#fff' }}>PASEWORLD</Text>
                        <TextInput
                            placeholder="请输入密码"
                            style={{ paddingLeft: 20, height: 40, borderColor: '#fff', borderWidth: 2, borderRadius: 20, backgroundColor: 'rgba(245,255,250,0.7)' }}
                            onChangeText={(text1) => this.setState({ text1 })}
                            value={this.state.text1}
                        />

                        <View style={{ marginTop: 80, }}>
                            <Button rounded light iconRight>
                                <Text style={{ fontSize: 16, marginLeft: '44%' }}>注 册</Text>
                                <Icon name='checkmark-circle-outline' style={{ marginLeft: '10%' }} />
                            </Button>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: 'rgba(255,255,255,0.5)', marginTop: '10%' }}>
                        </View>
                        <View style={{ flexDirection: 'row-reverse', alignContent: 'center' }}>
                            <Text onPress={() => {
                                Actions.login();
                            }}
                                style={{ fontSize: 14, fontFamily: '微软雅黑', marginTop: 10, color: '#000' }}
                            >前往登陆</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>);
    }
}

const styles = StyleSheet.create({
    contain: {
        marginTop: '4%',
        width: '80%',
        marginLeft: '10%'
    },
    shuru: {
        borderRadius: 5
    }
})