import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import Moment from 'moment';
class Event extends Component {
  constructor(props) {
    super(props);
    const {title, dateTime, image, url, key, description} = this.props;
    this.state = {
      title: title,
      dateTime: dateTime,
      image: image,
      description: description,
      url: url,
      key: key,
    };
  }
  render() {
    /*
    Todo:
     Add prototypes
     Pass to navigation
      Setup pass description
     Setup key
     Setup dateview

    */
    const {title, description, dateTime, image, url, key} = this.state;
    const {navigation} = this.props;
    const momentDateTime = Moment(dateTime)
      .utc()
      .local();
    return (
      <Card
        title={title}
        image={{uri: image}}
        featuredTitle={momentDateTime.calendar()}
        imageProps={{resizeMode: 'contain'}}>
        <Button
          title="Find out more >"
          onPress={() => {
            navigation.navigate('ExpandedView', this.state);
          }}
        />
      </Card>
    );
  }
}
export default withNavigation(Event);
