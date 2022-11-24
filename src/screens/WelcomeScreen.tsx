import React from 'react';
import { Text, View } from 'react-native';
import Avatar from '../components/Avatar';
import { Styles } from '../styles/Styles';

interface Props {
  size?: number;
  textStyle?: {};
}
const WelcomeScreen = ({ size, textStyle }: Props) => {
  return (
    <View style={Styles.container}>
      <Avatar size={size} />
      <Text style={textStyle}>Wallet App</Text>
    </View>
  );
};

export default WelcomeScreen;
