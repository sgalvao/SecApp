import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

class UserArea extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'link'
        }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export {UserArea};