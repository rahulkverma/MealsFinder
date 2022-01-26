import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {RestaurantsScreen} from '../screens/RestaurantsScreen';

import {RestaurantDetailScreen} from '../screens/RestaurantDetailScreen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}>
      <RestaurantStack.Screen name="Restaurant" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
