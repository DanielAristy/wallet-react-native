import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const App = (props: DrawerContentComponentProps) => {
  return (
    //<WelcomeScreen size={130} textStyle={Styles.textWelcome} />
    //<LoginScreen {...props} />
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};
export default App;
