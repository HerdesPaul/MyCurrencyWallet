import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LogInScreen} from '../../screens/AuthScreens/LogInScreen';
import {SignUpScreen} from '../../screens/AuthScreens/SignUpScreen';
import {AuthStackParamList} from 'types/navigation';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="LogIn" screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
  );
};
