import React, { useEffect, useState } from 'react';
import { BackHandler, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import { Styles } from '../styles/Styles';

const LoansScreen = ({ navigation }: MyStackScreenProps) => {
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

  const applyLoan = () => {};
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 20,
      }}>
      <Text style={{ color: '#000', fontSize: 15, alignItems: 'flex-start' }}>
        Cupo disponible
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginTop: 20 }}>
          <Icon name="currency-eur" size={25} color={'#000'} />
        </View>
        <Text style={{ color: '#000', fontSize: 40 }}>50.000.000.000</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginTop: 20 }}>
          <Icon name="credit-card-outline" size={25} color={'#000'} />
        </View>
        <TextInput
          style={Styles.changePasswordTextInput}
          placeholderTextColor="#000"
          placeholder={'Amount'}
          onChangeText={setAmount}
          value={amount}
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
        onPress={applyLoan}
      />
    </View>
  );
};

export default LoansScreen;
