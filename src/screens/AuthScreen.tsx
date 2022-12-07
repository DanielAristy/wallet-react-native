import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { Styles } from '../styles/Styles';
import { useSelector } from 'react-redux';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import { AuthContext } from '../context/AuthContext';

const AuthScreen = ({ navigation }: MyStackScreenProps) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { loggedIn, login, logout } = useContext(AuthContext);
  const [confirm, setConfirm] = useState(false);
  const { isAuth } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (loggedIn) {
      navigation.navigate('TabNavigation');
    } else if (loggedIn === false) {
      navigation.navigate('Auth');
    }
  }, [loggedIn]);

  useEffect(() => {
    if (isAuth) {
      navigation.navigate('TabNavigation');
    }
  }, [isAuth, navigation]);

  const handleLogin = () => {
    console.log('Logueado');
  };
  const handleContinue = () => {
    setConfirm(true);
  };
  const handleApple = () => {
    console.log('Login con Apple');
  };
  return (
    <View style={Styles.authContainer}>
      <View style={Styles.authContainerLogo}>
        <Logo size={100} />
        <View style={Styles.authContainerLogoText}>
          <Text style={Styles.authContainerLogoTextBlack}>MATERIAL</Text>
          <Text style={Styles.authContainerLogoTextPurple}>2</Text>
          <Text style={Styles.authContainerLogoTextBlack}>UI</Text>
        </View>
      </View>
      <View style={Styles.authContainerInputs}>
        <Text style={Styles.authContainerTextLogin}>
          Login or sign up for free
        </Text>
        {confirm ? (
          <View>
            <TextInput
              style={Styles.input}
              underlineColorAndroid="transparent"
              placeholder={'Password'}
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
              keyboardType="visible-password"
            />
            <Button
              styleTouchable={Styles.buttonBlue}
              styleText={Styles.text}
              title={'Login'}
              login
              onPress={handleLogin}
            />
          </View>
        ) : (
          <View>
            <TextInput
              style={Styles.input}
              underlineColorAndroid="transparent"
              placeholder={'Email or Username'}
              onChangeText={setUser}
              value={user}
              keyboardType="email-address"
            />
            <Button
              styleTouchable={Styles.buttonBlue}
              styleText={Styles.text}
              title={'Continue'}
              login
              onPress={handleContinue}
            />
          </View>
        )}
      </View>
      <View style={Styles.authContainerButtonRegister}>
        <View style={{ flexDirection: 'row', padding: 20 }}>
          <View style={Styles.authContainerButtonLine} />
          <Text style={{ color: '#D3D3D3' }}>register</Text>
          <View style={Styles.authContainerButtonLine} />
        </View>
        <View>
          <Button
            styleTouchable={Styles.buttonWhite}
            styleText={Styles.textBlack}
            title={'Sign in with Google'}
            url
            onPress={() => {
              login('5');
            }}
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
        <View style={{ marginTop: 10 }}>
          <Button
            styleTouchable={Styles.buttonWhite}
            styleText={Styles.textBlack}
            title={'Logout'}
            onPress={logout}
          />
        </View>
      </View>
    </View>
  );
};

export default AuthScreen;
