import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native'
export default class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <WebView
        source={{ uri: this.props.duri }}
      />
    );
  }
}


