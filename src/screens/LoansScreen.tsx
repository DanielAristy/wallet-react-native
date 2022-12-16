import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import { Styles } from '../styles/Styles';
import { useSelector } from 'react-redux';
import useHttp from '../hooks/useHttp';

const LoansScreen = ({ navigation }: MyStackScreenProps) => {
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const { client } = useSelector((state: any) => state.client);
  const { makeLoan, getAccountById } = useHttp();
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

  const applyLoan = async () => {
    await makeLoan({
      idIncome: client.account.id,
      idOutcome: client.account.id,
      reason: reason,
      amount: amount,
    });

    await getAccountById(client.account.id);
    setAmount('');
    setReason('');
  };
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
        <Text style={{ color: '#000', fontSize: 40 }}>
          {client.account.credit}
        </Text>
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
          keyboardType="number-pad"
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
      <TouchableOpacity
        style={
          client.account.credit === '0' ? Styles.buttonGray : Styles.buttonBlue
        }
        onPress={applyLoan}
        disabled={client.account.credit === '0' ? true : false}>
        <Text style={Styles.text}>Apply for loan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoansScreen;
