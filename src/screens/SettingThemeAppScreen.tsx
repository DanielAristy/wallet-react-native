import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export const SettingThemeApp = ({
  navigation,
}: DrawerContentComponentProps) => {
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
