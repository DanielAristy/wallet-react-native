import React, { useEffect } from 'react';
import { View, Text, Button, BackHandler } from 'react-native';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

export const ChangePasswordScreen = ({ navigation }: MyStackScreenProps) => {
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
    <View style={{ backgroundColor: 'white' }}>
      <Text style={{ color: '#000' }}>Cambiar Contraseña</Text>
      <Button
        title="Ir Pantalla 1"
        onPress={() => navigation.navigate('TabNavigation')}
      />
    </View>
  );
};
