import React, {Component} from 'react';
import {Linking, View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {WebView} from 'react-native-webview';
import ApplicationStylesheet from '../stylesheet/ApplicationStylesheet';
export default class componentName extends Component {
  render() {
    // Get props from navigation
    const description = this.props.navigation.getParam(
      'description',
      'Something has gone awry',
    );
    const url = this.props.navigation.getParam('url', false);
    const title = this.props.navigation.getParam('title', false);
    const dateTime = this.props.navigation.getParam('dateTime', false);
    return (
      <View style={ExpandedViewStyleSheet.container}>
        {/* Show title dateTime if it exists */}
        {title && <Text style={ExpandedViewStyleSheet.title}>{title}</Text>}
        {dateTime && (
          <Text style={ExpandedViewStyleSheet.dateTime}>{dateTime}</Text>
        )}
        {/* WebView note - viewport hack to enable html to be adaptive */}
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
  },
  title: {
    fontSize: ApplicationStylesheet.TextStylesheet.TitleSmaller,
    textAlign: 'center',
  },
  dateTime: {
    fontSize: ApplicationStylesheet.TextStylesheet.MediumLarge,
  },
  container: {
    flex: 1,
    margin: 5,
  },
});
