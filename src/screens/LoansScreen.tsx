import React, { useEffect } from 'react';
import { Alert, BackHandler, Text, View } from 'react-native';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

const LoansScreen = ({ navigation }: MyStackScreenProps) => {
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
      <Text style={{ color: '#000' }}>LoansScreen</Text>
    </View>
  );
};

export default LoansScreen;
