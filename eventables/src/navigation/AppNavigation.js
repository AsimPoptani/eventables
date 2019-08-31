import React from 'react';
// Navigation
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Screens
import Home from '../screens/Home';
import SplashScreen from '../screens/SplashScreen';
import ExpandedView from '../screens/ExpandedView';
// Keep awake
import KeepAwake from 'react-native-keep-awake';

// Todo remove this when prod
KeepAwake.activate();

// Main application stack
const MainAppNavigation = createStackNavigator({
  Home: {screen: Home},
  ExpandedView: {screen: ExpandedView},
});
// Switch navigator to switch from Splashscreen to stack
const SplashScreenToMainAppNavigation = createSwitchNavigator({
  SplashScreen: {screen: SplashScreen},
  MainAppNavigation,
});
// return App navigator
export default createAppContainer(SplashScreenToMainAppNavigation)