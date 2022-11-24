import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export const ChangePasswordScreen = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <View>
      <Text>Cambiar Contraseña</Text>
      <Button
        title="Ir Pantalla 1"
        onPress={() => navigation.navigate('TabNavigation')}
      />
    </View>
  );
};
