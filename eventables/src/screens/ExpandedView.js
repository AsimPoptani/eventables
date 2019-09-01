import React, {Component} from 'react';
import {Linking, View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {WebView} from 'react-native-webview';

export default class componentName extends Component {
  render() {
    const description = this.props.navigation.getParam(
      'description',
      'Something has gone awry',
    );
    const url = this.props.navigation.getParam('url', false);
    const title = this.props.navigation.getParam('title', false);
    const dateTime = this.props.navigation.getParam('dateTime', false);
    return (
      <View style={ExpandedViewStyleSheet.container}>
        {title && <Text>{title}</Text>}
        {title && <Text>{dateTime}</Text>}
        <WebView
          originWhitelist={['*']}
          style={ExpandedViewStyleSheet.webview}
          domStorageEnabled
          startInLoadingState
          scalesPageToFit
          source={{
            html:
              '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>' +
              description +
              '</body></html>',
          }}
        />
        {url && (
          <Button
            title="Book Now"
            onPress={() => {
              Linking.openURL(url);
            }}
          />
        )}
      </View>
    );
  }
}
const ExpandedViewStyleSheet = StyleSheet.create({
  webview: {
    flex: 1,
    fontSize: 100,
  },
  container: {
    flex: 1,
    margin: 5,
  },
});
