import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Avatar from '../components/Avatar';
import { Styles } from '../styles/Styles';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

const WelcomeScreen = ({ navigation }: MyStackScreenProps) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Auth'), 1000);
  });
  return (
    <View style={Styles.container}>
      <Avatar size={130} />
      <Text style={Styles.textWelcome}>Wallet App</Text>
    </View>
  );
};

export default WelcomeScreen;
