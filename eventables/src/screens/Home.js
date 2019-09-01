import React, {Component} from 'react';
import {
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {fetchEventData} from '../api/api';
import Spinner from 'react-native-spinkit';
import Event from '../components/Event';
import ApplicationStylesheet from '../stylesheet/ApplicationStylesheet';
import moment from 'moment';
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
      const eventsSorted = events.sort((event1, event2) => {
        if (
          moment(event1.start.utc).toDate() -
            moment(event2.start.utc).toDate() >=
          0
        ) {
          return true;
        } else {
          return false;
        }
      });

      return (
        <SafeAreaView>
          {/* Added flatlist to handle the events */}
          <FlatList
            data={eventsSorted}
            renderItem={({item: event}) => (
              <Event
                title={event.name.text}
                dateTime={event.start.utc}
                description={event.description.html}
                key={event.id}
                image={event.logo.original.url}
                url={event.url}
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
