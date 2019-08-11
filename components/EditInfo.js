import React, { Component } from 'react';
import { View, StatusBar, Text, ImageBackground, Image, ScrollView, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { Container, Picker, Button, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Icon, Switch, Spinner, Title } from 'native-base';
import MyHeader from './public/MyHeader.js'
import { Actions } from 'react-native-router-flux'

export default class EditInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "key1"
        }
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (

            <Container>
                <StatusBar
                    barStyle={'light-content'}
                ></StatusBar>
                <Content>
                    <List>
                        <ListItem>
                            <Text>修改用户头像</Text>
                        </ListItem>
                        <ListItem>
                            <Text>修改背景图</Text>
                        </ListItem>
                        <ListItem>
                            <Text>修改用户名</Text>
                        </ListItem>
                        <ListItem>
                            <Text>修改密码</Text>
                        </ListItem>
                        <ListItem>
                            <Text>修改性别</Text>
                            <Body>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="选择性别"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="男" value="key0" />
                                    <Picker.Item label="女" value="key1" />
                                    <Picker.Item label="未知" value="key2" />
                                </Picker>
                            </Body>
                        </ListItem>
                    </List>
                    <Button warning><Text> 提交 </Text></Button>
                </Content>
            </Container>
        );
    }
}