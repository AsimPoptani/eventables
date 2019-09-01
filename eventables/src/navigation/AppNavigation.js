import React from 'react';
// Navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';

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
const SplashScreenToMainAppNavigation = createAnimatedSwitchNavigator(
  {
    SplashScreen: {screen: SplashScreen},
    MainAppNavigation,
  },
  {
    // Added transition between SplashScreen and mainApplication
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);
// return App navigator
export default createAppContainer(SplashScreenToMainAppNavigation);
