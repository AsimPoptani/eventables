import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Card, Button} from 'react-native-elements';
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
    const {title, description, dateTime, image, url} = this.state;
    const {navigation} = this.props;
    const momentDateTime = Moment(dateTime)
      .utc()
      .local();
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ExpandedView', {
            title: title,
            description: description,
            dateTime: momentDateTime.calendar(),
            url: url,
          });
        }}>
        <Card
          title={title}
          image={{uri: image}}
          featuredTitle={momentDateTime.calendar()}
          imageProps={{resizeMode: 'contain'}}>
          <Button
            title="Find out more >"
            onPress={() => {
              navigation.navigate('ExpandedView', {
                title: title,
                description: description,
                dateTime: momentDateTime.calendar(),
                url: url,
              });
            }}
          />
        </Card>
      </TouchableOpacity>
    );
  }
}
export default withNavigation(Event);
