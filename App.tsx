import React from 'react';

import WelcomeScreen from './src/screens/WelcomeScreen';
import { Styles } from './src/screens/styles/Styles';

const App = () => {
  return <WelcomeScreen size={130} textStyle={Styles.textWelcome} />;
};

export default App;
