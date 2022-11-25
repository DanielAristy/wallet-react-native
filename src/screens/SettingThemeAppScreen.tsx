import React, { useEffect } from 'react';
import { View, Text, Button, BackHandler, Alert } from 'react-native';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

export const SettingThemeApp = ({ navigation }: MyStackScreenProps) => {
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
    <View style={{ backgroundColor: '#fff' }}>
      <Text style={{ color: '#000' }}>Configuracion de Tema de App</Text>
      <Button
        title="Ir Pantalla 1"
        onPress={() => navigation.navigate('TabNavigation')}
      />
    </View>
  );
};
