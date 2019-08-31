import React, { Component } from 'react'
import { ImageBackground,StyleSheet  } from 'react-native'

export default class SplashScreen extends Component {
  render() {
    // Go to home page after 2 seconds
    setTimeout(()=>{this.props.navigation.navigate('MainAppNavigation')},2000)

    // Render an image background for splash screen
    return (
      <ImageBackground style={SplashScreenStyle.container} source={require('../assets/images/splash.png')}/>
    )
  }
}
const SplashScreenStyle = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
})