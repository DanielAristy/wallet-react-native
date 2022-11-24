import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from './Avatar';

const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.containerAvatar}>
        <Avatar size={50} />
        <Text style={styles.containerAvatarText}>Daniel Aristizabal</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
        <View style={styles.containerButton}>
          <Icon name="wallet-sharp" size={25} />
          <Text style={styles.containerButtonText}>Cambiar Contraseña</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SettingThemeApp')}>
        <View style={styles.containerButton}>
          <Icon name="wallet-sharp" size={25} />
          <Text style={styles.containerButtonText}>Cambiar tema del app</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={styles.containerButton}>
          <Icon name="wallet-sharp" size={25} />
          <Text style={styles.containerButtonText}>Cerrar Sesion</Text>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  containerAvatar: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
  },
  containerAvatarText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 10,
    padding: 10,
  },
  containerButtonText: {
    flex: 1,
    fontFamily: 'Roboto',
    marginTop: 5,
    marginBottom: 0,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    opacity: 0.5,
    letterSpacing: 0.7,
  },
});

export default InternalMenu;
