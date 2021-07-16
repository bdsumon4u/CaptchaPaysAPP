import React, {useEffect} from 'react';
import type {Node} from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import RNBootSplash from 'react-native-bootsplash';
import AppView from './screens/AppView';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    // Hide SplashScreen after 3secs or Make an async task
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 1000);
  }, []);

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppView />
    </>
  );
};

export default App;
