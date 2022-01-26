import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigator} from './app.navigator.js';
import {AccountNavigator} from './account.navigator.js';

import {AuthenticationContext} from '../context/AuthenticationContext';

export const Navigation = () => {
  const {isAuthenticated} = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
