import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Card, Button} from 'react-native-elements';
import Moment from 'moment';
import PropTypes from 'prop-types';
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
    // Deconstruct state
    const {title, description, dateTime, image, url} = this.state;
    // Get nav
    const {navigation} = this.props;
    // parse date and convert to users localtime
    const momentDateTime = Moment(dateTime)
      .utc()
      .local();
    return (
      // Make whole section clickable
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
// Proptypes to check incoming data
Event.propTypes = {
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
Event.defaultProps = {
  image:
    'https://developersushant.files.wordpress.com/2015/02/no-image-available.png',
};
export default withNavigation(Event);
