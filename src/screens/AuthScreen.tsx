import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { Styles } from '../styles/Styles';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setToken } from '../redux/slice/AuthSlice';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import { AuthContext } from '../context/AuthContext';

const AuthScreen = ({ navigation }: MyStackScreenProps) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { loggedIn, login } = useContext(AuthContext);
  const [confirm, setConfirm] = useState(false);

  const dispatch = useDispatch();
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
    console.log(confirm);
  }, [isAuth, navigation]);

  const handleLogin = () => {
    dispatch(setToken('token123456'));
    dispatch(setLogin());
    setUser('');
    setPassword('');
    setConfirm(false);
  };
  const handleContinue = () => {
    setConfirm(true);
  };

  // const handleGoogle = () => {
  //   console.log('Login con Google');
  // };
  const handleApple = () => {
    console.log('Login con Apple');
  };
  return (
    <View style={Styles.authContainer}>
      <Logo size={110} marginTop={100} />
      <View style={Styles.authContainerText}>
        <Text style={Styles.authContainerTextBlack}>MATERIAL</Text>
        <Text style={Styles.authContainerTextPurple}>2</Text>
        <Text style={Styles.authContainerTextBlack}>UI</Text>
      </View>
      <Text style={Styles.authContainerTextLogin}>
        Login or sign up for free
      </Text>
      <View>
        {confirm ? (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
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
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
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
          onPress={login}
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
