import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './src/types/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigator} from './src/navigators/AuthNavigator/AuthNavigator';
import {BottomNavigator} from './src/navigators/BottomNavigator/BottomNavigator';

LogBox.ignoreLogs(['Seems like you']);

const RootStack = createNativeStackNavigator<RootStackParamList>();

const InnerApp = () => {
  // const navigationRef = useNavigationContainerRef();
  // useFlipper(navigationRef);

  return (
    <NavigationContainer>
      <RootStack.Navigator >
        <RootStack.Screen name={'Main'} component={AuthNavigator} />
        <RootStack.Screen name={'Home'} component={BottomNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <InnerApp />;
};

export default App;
