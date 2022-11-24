import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { Styles } from './styles/Styles';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const LoginScreen = ({ navigation }: DrawerContentComponentProps) => {
  const [user, userState] = useState('');
  console.log(user);

  const handleLogin = () => {
    console.log('Login con Usuario');
    navigation.navigate('TabNavigation');
  };

  const handleGoogle = () => {
    console.log('Login con Google');
  };
  const handleApple = () => {
    console.log('Login con Apple');
  };
  return (
    <View style={Styles.containerLogin}>
      <Logo size={80} marginTop={20} />
      <Text>Material 2 UI</Text>
      <Text style={Styles.textLogin}>Login or sign up for free</Text>
      <TextInput
        style={Styles.input}
        underlineColorAndroid="transparent"
        placeholder={'Email or Username'}
        onChangeText={userState}
        value={user}
        keyboardType="email-address"
      />
      <Button
        styleTouchable={Styles.buttonBlue}
        styleText={Styles.text}
        title={'Login'}
        login
        onPress={() => handleLogin()}
      />
      <Button
        styleTouchable={Styles.buttonWhite}
        styleText={Styles.textBlack}
        title={'Sign in with Google'}
        url
        onPress={() => handleGoogle()}
      />
      <Button
        styleTouchable={Styles.buttonWhite}
        styleText={Styles.textBlack}
        title={'Sign in with Apple'}
        onPress={() => handleApple()}
      />
    </View>
  );
};

export default LoginScreen;
