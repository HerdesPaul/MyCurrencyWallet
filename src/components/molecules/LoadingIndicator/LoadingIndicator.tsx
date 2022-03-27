import React, { useRef } from 'react';
import { ActivityIndicator, Animated } from 'react-native';
import { Colors } from 'constants/Colors';
import { styles } from './style';

export const LoadingIndicator = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const backgroundColor = () => {
    Animated.timing(fadeAnim, {
      toValue: 100,
      duration: 10000,
      useNativeDriver: false,
    }).start();

    return {
      backgroundColor: fadeAnim.interpolate({
        inputRange: [25, 50, 75, 100],
        outputRange: [Colors.black, Colors.gray, Colors.black, Colors.gray],
      }),
    };
  };

  return (
    <Animated.View style={[styles.loading, backgroundColor()]}>
      <ActivityIndicator />
    </Animated.View>
  );
};
