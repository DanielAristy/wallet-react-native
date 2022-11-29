import React, { useEffect, useState } from 'react';
import { View, Text, BackHandler, Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import { Styles } from '../styles/Styles';

const PaymentScreen = ({ navigation }: MyStackScreenProps) => {
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
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

  const sendPayment = () => {};
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 20,
      }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginTop: 8 }}>
          <Icon name="currency-usd" size={40} color={'#000'} />
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={{ color: '#000', fontSize: 40 }}>50.000.000.000</Text>
          <Text style={{ color: '#000', fontSize: 15 }}>Account Balance</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginTop: 20 }}>
          <Icon name="account" size={25} color={'#000'} />
        </View>
        <TextInput
          style={Styles.changePasswordTextInput}
          placeholderTextColor="#000"
          placeholder={"User's email or phone number"}
          onChangeText={setAmount}
          value={amount}
          secureTextEntry={true}
          keyboardType="visible-password"
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginTop: 20 }}>
          <Icon name="currency-eur" size={25} color={'#000'} />
        </View>
        <TextInput
          style={Styles.changePasswordTextInput}
          placeholderTextColor="#000"
          placeholder={'Amount'}
          onChangeText={setReason}
          value={reason}
          secureTextEntry={true}
          keyboardType="visible-password"
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginTop: 20 }}>
          <Icon name="message-reply-text" size={25} color={'#000'} />
        </View>
        <TextInput
          style={Styles.changePasswordTextInput}
          placeholderTextColor="#000"
          placeholder={'Reason'}
          onChangeText={setReason}
          value={reason}
          secureTextEntry={true}
          keyboardType="visible-password"
        />
      </View>
      <Button
        styleTouchable={Styles.buttonBlue}
        styleText={Styles.text}
        title={'Apply for loan'}
        login
        onPress={sendPayment}
      />
    </View>
  );
};

export default PaymentScreen;
