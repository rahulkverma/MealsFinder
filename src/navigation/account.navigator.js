import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AccountScreen} from '../screens/Account/account';
import {LoginScreen} from '../screens/Account/login';
import {RegisterScreen} from '../screens/Account/register';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
