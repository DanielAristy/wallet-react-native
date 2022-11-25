import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { Provider } from 'react-redux';
import { ConfigStore } from './src/redux/storage/ConfigStore';

const App = () => {
  return (
    <Provider store={ConfigStore}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
