import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {fetchEventData} from '../api/api';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: false,
      error: false,
    };
    const {events, error} = this.state;
    // Get the events
    fetchEventData()
      .then(events => this.setState({events: events}))
      .catch({error: true});
  }
  render() {
    
    const {events, error} = this.state;
    // If there are no events loaded show loading
    if ( !events) {
      return (
        <SafeAreaView>
          <Text>loading</Text>
        </SafeAreaView>
      );
    } else if (error) {
      return (
        <SafeAreaView>
          <Text>There has been an error</Text>
        </SafeAreaView>
      );
    } else {
      console.warn(events);
      return (
        <View>
          <Text> Home Page </Text>
        </View>
      );
    }
  }
}
