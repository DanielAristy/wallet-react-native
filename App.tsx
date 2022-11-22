import React from 'react';
import { TabNavigation } from './src/components/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    //<WelcomeScreen size={130} textStyle={Styles.textWelcome} />
    //<LoginScreen />
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};
export default App;
