import React from 'react';
import { View, Text } from 'react-native';

const AccountScreen = () => {
  return (
    <View
      style={{
        borderColor: 'red',
        borderWidth: 1,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Text style={{ color: '#000' }}>AccountScreen</Text>
    </View>
  );
};

export default AccountScreen;
