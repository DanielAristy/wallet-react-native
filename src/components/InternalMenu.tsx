import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';

const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.containerAvatar}>
        <Avatar size={50} />
        <Text style={styles.containerAvatarText}>Daniel Aristizabal</Text>
      </View>
      <View
        style={{
          padding: 5,
          height: 410,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
          <View style={styles.containerButton}>
            <Icon name="cog-outline" size={25} />
            <Text style={styles.containerButtonText}>Cambiar Contraseña</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingThemeApp')}>
          <View style={styles.containerButton}>
            <Icon name="bookmark" size={25} />
            <Text style={styles.containerButtonText}>Cambiar tema del app</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{ padding: 8, borderColor: '#D3D3D3', borderBottomWidth: 1 }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.containerButton}>
            <Icon name="close-thick" size={25} />
            <Text style={styles.containerButtonText}>Cerrar Sesion</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerAvatarFooter}>
        <Avatar size={120} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  containerAvatar: {
    padding: 30,
    alignItems: 'center',
    height: 150,
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
    marginLeft: 5,
    padding: 10,
    marginTop: 15,
  },
  containerButtonText: {
    flex: 1,
    fontFamily: 'Roboto',
    marginBottom: 0,
    marginLeft: 18,
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    opacity: 0.5,
    letterSpacing: 0.7,
  },
  containerAvatarFooter: {
    padding: 40,
    alignItems: 'center',
    height: 190,
  },
});

export default InternalMenu;
