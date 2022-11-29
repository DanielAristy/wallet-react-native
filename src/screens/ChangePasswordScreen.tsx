import React, { useEffect, useState } from 'react';
import { View, BackHandler, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import { setLogout } from '../redux/slice/AuthSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Styles } from '../styles/Styles';

export const ChangePasswordScreen = ({ navigation }: MyStackScreenProps) => {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        navigation.navigate('TabNavigation');
        return true;
      } else {
        return false;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  const changePassword = () => {
    dispatch(setLogout());
    navigation.navigate('Auth');
  };

  const cancel = () => {
    navigation.navigate('TabNavigation');
  };
  return (
    <View style={Styles.changePasswordContainer}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginTop: 20 }}>
          <Icon name="account-key" size={25} color={'#000'} />
        </View>
        <TextInput
          style={Styles.changePasswordTextInput}
          placeholderTextColor="#000"
          placeholder={'Current password'}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          keyboardType="visible-password"
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginTop: 20 }}>
          <Icon name="account-lock" size={25} color={'#000'} />
        </View>
        <TextInput
          style={Styles.changePasswordTextInput}
          placeholderTextColor="#000"
          placeholder={'New password'}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          keyboardType="visible-password"
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginTop: 20 }}>
          <Icon name="account-lock" size={25} color={'#000'} />
        </View>
        <TextInput
          style={Styles.changePasswordTextInput}
          placeholderTextColor="#000"
          placeholder={'Retype new Password'}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          keyboardType="visible-password"
        />
      </View>

      <Button
        styleTouchable={Styles.buttonBlue}
        styleText={Styles.text}
        title={'Change Password'}
        login
        onPress={changePassword}
      />
      <Button
        styleTouchable={Styles.buttonWhite}
        styleText={{ color: '#000' }}
        title={'Cancelar'}
        login
        onPress={cancel}
      />
    </View>
  );
};
