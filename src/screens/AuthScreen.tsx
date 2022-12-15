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
  const [validNumber, setValidNumber] = useState(false);
  const [validAuth, setValidAuth] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

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

  const handlePhoneLogin = () => {
    setValidNumber(false);
    setValidAuth(true);
  };
  const handleLogin = () => {
    console.log('Loging with user and password');
  };
  const handleContinue = () => {
    setConfirm(true);
  };
  const handleApple = () => {
    console.log('Login con Apple');
  };

  const handleLoginAuth0 = () => {
    setConfirm(false);
    setValidNumber(true);
  };

  useEffect(() => {
    const auth = async (number: string) => {
      await login(number);
    };
    if (validAuth) {
      auth(phoneNumber);
      setPhoneNumber('');
      setValidAuth(false);
    }
  }, [validAuth, phoneNumber]);

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
        {!validNumber && (
          <Text style={Styles.authContainerTextLogin}>
            Login or sign up for free
          </Text>
        )}
        {validNumber ? (
          <>
            <Text style={Styles.authContainerTextLogin}>
              Phone number before pressing the continue button
            </Text>
            <View>
              <TextInput
                style={Styles.input}
                underlineColorAndroid="transparent"
                placeholder={'Phone number'}
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                keyboardType="number-pad"
              />
              <Button
                styleTouchable={Styles.buttonBlue}
                styleText={Styles.text}
                title={'Continue'}
                login
                onPress={handlePhoneLogin}
              />
            </View>
          </>
        ) : confirm ? (
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
            onPress={handleLoginAuth0}
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
