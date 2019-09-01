import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
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
     Add proptypes
     Pass to navigation
      Setup pass description
     Setup key
     Setup dateview
     
    */
    const {title, description, dateTime, image, url, key} = this.state;

    return (
      <Card
        title={title}
        image={{uri: image}}
        imageProps={{resizeMode: 'contain'}}>
        {/* <Text> {description} </Text> */}
        <Button title="View Now" onPress={() => {}} />
      </Card>
    );
  }
}
export default withNavigation(Event);
