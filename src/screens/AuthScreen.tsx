import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { Styles } from '../styles/Styles';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setToken } from '../redux/slice/AuthSlice';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

const AuthScreen = ({ navigation }: MyStackScreenProps) => {
  const [user, userState] = useState('');
  console.log(user);

  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (isAuth) {
      navigation.navigate('TabNavigation');
    }
  }, [isAuth, navigation]);

  const handleLogin = () => {
    dispatch(setToken('token123456'));
    dispatch(setLogin());
  };

  const handleGoogle = () => {
    console.log('Login con Google');
  };
  const handleApple = () => {
    console.log('Login con Apple');
  };
  return (
    <View style={Styles.containerLogin}>
      <Logo size={110} marginTop={100} />
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 22,
            letterSpacing: 2,
            marginRight: 10,
          }}>
          MATERIAL
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            letterSpacing: 2,
            marginRight: 10,
            color: 'purple',
          }}>
          2
        </Text>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 22,
            letterSpacing: 2,
            marginRight: 10,
          }}>
          UI
        </Text>
      </View>
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
        onPress={handleLogin}
      />
      <View
        style={{
          width: 270,
          padding: 8,
          borderColor: '#D3D3D3',
          borderBottomWidth: 1,
          marginBottom: 20,
        }}
      />
      <View>
        <Button
          styleTouchable={Styles.buttonWhite}
          styleText={Styles.textBlack}
          title={'Sign in with Google'}
          url
          onPress={() => handleGoogle()}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button
          styleTouchable={Styles.buttonWhite}
          styleText={Styles.textBlack}
          title={'Sign in with Apple'}
          onPress={() => handleApple()}
        />
      </View>
    </View>
  );
};

export default AuthScreen;
