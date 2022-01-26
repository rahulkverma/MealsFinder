import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import {Navigation} from './navigation';
import SplashScreen from 'react-native-splash-screen';
import firestore from '@react-native-firebase/firestore';

console.log(' App screen');

firestore()
  .collection('users')
  .doc('T2mYs65RMLV4LKzcKzth')
  .get()
  .then(snap => {
    console.log('User exists: ', snap.exists);
    if (snap.exists) {
      console.log('User1 data: ', snap.data());
    }
  });

import {AuthenticationContextProvider} from './context/AuthenticationContext';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
