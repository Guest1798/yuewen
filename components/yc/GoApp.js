import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  ImageBackground,
  Linking,
} from 'react-native';
import { Container, Header, Content, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux'
const url = 'https://github.com/blessleon'
export default class GoApp extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    Linking.addEventListener('url', this._handleOpenURL);
  }
  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  }
  render() {
    return <View style={styles.mcontainer}>
      <ImageBackground
        imageStyle={{ opacity: 0, }}
        style={{ position: 'absolute', }}

        source={{ uri: 'http://pic.netbian.com/uploads/allimg/190323/235101-1553356261d822.jpg' }} style={{ width: '100%', height: '100%' }}>
      </ImageBackground>
      <StatusBar
        hidden
        translucent
        barStyle={'dark-content'}
      ></StatusBar>
      <View style={{ position: 'absolute', marginTop: 80 }}>
        <View style={styles.mhead}>
          <Text style={{ fontSize: 80, color: "#0079FF", fontWeight: 'bold' }}>悦闻</Text>
        </View>
        <View>
          <TouchableHighlight underlayColor='#00000000' onPress={() => { this.goHome() }}>
            <View style={{ marginTop: 50 }}>
              {/* <Spinner color='#0079FF'></Spinner> */}
            </View>
          </TouchableHighlight>
          <View style={styles.mbottom}><Text style={{ color: '#434343', fontWeight: 'normal' }}>欢迎使用悦闻</Text></View>
          <View style={styles.mbottom}><Text style={{ color: '#434343', fontWeight: 'normal' }}>App designer Blessleon</Text></View>
          <View style={styles.mbottom}><Text onPress={this.goVisitdesigner}
            style={{ color: '#0079FF', fontWeight: 'normal' }}>查看作者</Text></View>
        </View>
      </View>
    </View>
  }
  goVisitdesigner = () => {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        alert('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }
}

const styles = StyleSheet.create({
  mcontainer: {
    backgroundColor: '#fff',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // position:'absolute',
    // marginTop: 80,
    position: 'relative',
  },
  mhead: {
    width: 200,
    height: 200,
    borderWidth: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderColor: "#0079FF",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  mcenter: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderColor: "#0079FF",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#0079FF",
    marginTop: 100,
  },
  mbottom: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


