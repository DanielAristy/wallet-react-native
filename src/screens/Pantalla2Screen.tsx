import React from 'react';
import { View, Text, Button } from 'react-native';
import { MyDrawerContentProps } from './interfaces/MyDrawerContentProps';

export const Pantalla2Screen = ({ navigation }: MyDrawerContentProps) => {
  return (
    <View>
      <Text>Pantalla2Screen</Text>
      <Button
        title="Ir Pantalla 1"
        onPress={() => navigation.navigate('TabNavigation')}
      />
    </View>
  );
};
