import React, { Component } from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground,
    TextInput,
} from 'react-native';
import { Icon, Button } from 'native-base';
export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (<ScrollView>
            <View>
                <StatusBar
                    backgroundColor='rgba(0,0,0,0)'
                    translucent={true}
                    barStyle={'dark-content'}
                ></StatusBar>
                <ImageBackground
                    
                    source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565088258016&di=06ed1813f31078932921e68861a3c4b0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201110%2F14%2F20111014094950_Enmyh.jpg' }} style={{ width: '100%', height: 260 }}>
                    <View style={{ height: 260, position: 'relative' }}>
                        <View style={styles.titleStyle}>
                            <Text style={{ color: '#fff', fontSize: 24, alignSelf: 'center', }}>小淘气</Text>
                        </View>
                        <TextInput
                            placeholder='你想吃啥'
                            placeholderTextColor='#aaa'
                            style={styles.searchbar}
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                        <Icon name='search' style={styles.searchbarIcon}
                            onPress={() => {
                                //处理点击搜索的动作
                                alert(this.state.text);
                            }}
                        ></Icon>
                    </View>
                </ImageBackground>

                <View style={styles.viewBox2}>

                </View>
                <View style={styles.viewBox}>

                </View>
                <View style={styles.viewBox}>

                </View>


            </View>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        position: 'absolute',
        top: 32,
        backgroundColor: 'rgba(0,0,0,0)',
        width: '100%',
    },

    searchbar: {
        position: 'absolute',
        bottom: 20,
        left: '3%',
        height: 48,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 4,
        width: '94%',
        padding: 10,
        fontSize: 16,
    },
    searchbarIcon: {
        position: 'absolute',
        bottom: 20,
        right: '4%',
        padding: 10,
        fontSize: 26,
        color: '#666',
    },
    viewBox: {
        marginTop: 20,
        width: '94%',
        left: '3%',
        height: 400,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderRadius: 4,
        borderWidth: 1,
    },
    viewBox2: {
        marginTop: 20,
        width: '94%',
        left: '3%',
        height: 80,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderRadius: 4,
        borderWidth: 1,
    },
})