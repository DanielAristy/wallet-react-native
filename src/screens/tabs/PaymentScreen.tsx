import React from 'react';
import { View, Text } from 'react-native';

const PaymentScreen = () => {
  return (
    <View
      style={{
        borderColor: 'red',
        borderWidth: 1,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Text style={{ color: '#000' }}>Realizar pago</Text>
    </View>
  );
};

export default PaymentScreen;
