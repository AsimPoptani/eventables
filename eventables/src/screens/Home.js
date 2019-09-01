import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {fetchEventData} from '../api/api';
import Spinner from 'react-native-spinkit';
import Event from '../components/Event';
import ApplicationStylesheet from '../stylesheet/ApplicationStylesheet';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: false,
      error: false,
    };
    // Get the events
    fetchEventData()
      .then(events => this.setState({events: events}))
      .catch({error: true});
  }
  render() {
    const {events, error} = this.state;
    // If there are no events loaded show loading
    if (!events) {
      return (
        <SafeAreaView style={HomeStyleSheet.centerContent}>
          {/* Spin in the middle of the screen and have the spinner fill 60%
          of the width */}
          <Spinner
            type={'WanderingCubes'}
            color={ApplicationStylesheet.ThemeColors.transparentOrange}
            size={Dimensions.get('screen').width * 0.6}
          />
          <Text> Loading please wait ...</Text>
        </SafeAreaView>
      );
    } else if (error) {
      return (
        <SafeAreaView>
          <Text>There has been an error</Text>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView>
          {/* Added flatlist to handle the events */}
          <FlatList
            data={events}
            renderItem={({item}) => (
              <Event
                title={item.name.text}
                dateTime={item.start.utc}
                description={item.description.text}
                key={item.id}
                image={item.logo.original.url}
                url={item.url}
              />
            )}
          />
        </SafeAreaView>
      );
    }
  }
}
const HomeStyleSheet = StyleSheet.create({
  centerContent: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
