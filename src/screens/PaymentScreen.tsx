import React, { useEffect } from 'react';
import { View, Text, BackHandler, Alert } from 'react-native';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

const PaymentScreen = ({ navigation }: MyStackScreenProps) => {
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
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Text style={{ color: '#000' }}>Realizar pago</Text>
    </View>
  );
};

export default PaymentScreen;
