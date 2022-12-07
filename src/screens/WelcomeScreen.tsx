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
    <View style={Styles.welcomeContainer}>
      <View style={Styles.welcomeContainerAvatar}>
        <Avatar size={130} />
      </View>
      <View style={Styles.welcomeContainerText}>
        <Text style={Styles.textWelcome}>Wallet App</Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;
