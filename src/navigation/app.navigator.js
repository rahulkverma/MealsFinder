import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {RestaurantsNavigator} from './restaurants.navigator';
import {SettingsNavigator} from './settings.navigator';

import {MapScreen} from '../screens/Map';

import {RestaurantsContextProvider} from '../context/RestaurantContext';
import {LocationContextProvider} from '../context/LocationContext';
import {FavouritesContextProvider} from '../context/FavouriteContext';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'hamburger',
  Map: 'map-marker',
  Settings: 'power-settings',
};

const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({size, color}) => (
      <MaterialCommunityIcons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'grey',
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen
            name="Restaurants"
            options={{headerShown: false}}
            component={RestaurantsNavigator}
          />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen
            name="Settings"
            options={{headerShown: false}}
            component={SettingsNavigator}
          />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    width: '100%',
    height: '100%',
    minHeight: 300,
    minWidth: 300,
  },
});
