import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const LogInScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{justifyContent: 'center', marginTop: 150, alignItems: 'center'}}>
      <Text style={{color: 'red'}}>Log In Screeen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text> go to main</Text>
      </TouchableOpacity>
    </View>
  );
};
