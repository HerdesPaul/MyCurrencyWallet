import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeScreen} from '../../screens/HomeScreen';

const BottomTab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="first" component={HomeScreen} />
      <BottomTab.Screen name="second" component={HomeScreen} />
      <BottomTab.Screen name="third" component={HomeScreen} />
    </BottomTab.Navigator>
  );
};
