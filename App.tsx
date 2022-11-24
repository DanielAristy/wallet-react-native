import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import DrawerNavigation from './src/components/DrawerNavigation';

const App = () => {
  return (
    //<WelcomeScreen size={130} textStyle={Styles.textWelcome} />
    //<LoginScreen />
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};
export default App;
