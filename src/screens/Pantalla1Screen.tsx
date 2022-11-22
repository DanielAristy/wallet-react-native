import React from 'react';
import { View, Text, Button } from 'react-native';
import { MyDrawerContentProps } from './interfaces/MyDrawerContentProps';

export const Pantalla1Screen = ({ navigation }: MyDrawerContentProps) => {
  return (
    <View>
      <Text>Pantalla1Screen</Text>
      <Button
        title="Ir Pantalla 1"
        onPress={() => navigation.navigate('TabNavigation')}
      />
    </View>
  );
};
