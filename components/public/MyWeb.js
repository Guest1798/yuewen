import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
class MyWeb extends Component {
  constructor(props){
    super(props);
    this.state={
      uri:'https://www.baidu.com/'
    }
  }
  render() {
    return (
      <WebView
        source={{uri: this.props.duri}}
      />
    );
  }
}