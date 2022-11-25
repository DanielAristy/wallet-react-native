import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';
import { useDispatch } from 'react-redux';
import { setLogout } from '../redux/slice/AuthSlice';

const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setLogout());
    navigation.navigate('Auth');
  };
  return (
    <DrawerContentScrollView>
      <View style={styles.containerAvatar}>
        <Avatar
          size={100}
          url={
            'https://lh3.googleusercontent.com/ogw/AOh-ky1gQ_jNZBwtZTNlcgslDWCLp5xzRWaldvWrPAIX=s32-c-mo'
          }
          validUrl
          customStyles={{ borderRadius: 50, resizeMode: 'contain' }}
        />
        <Text style={styles.containerAvatarText}>Daniel Aristizabal</Text>
      </View>
      <View style={styles.containerToucheable}>
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => navigation.navigate('ChangePassword')}>
          <Icon name="cog-outline" size={25} />
          <Text style={styles.containerButtonText}>Cambiar Contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => navigation.navigate('SettingThemeApp')}>
          <Icon name="bookmark" size={25} />
          <Text style={styles.containerButtonText}>Cambiar tema del app</Text>
        </TouchableOpacity>
        <View
          style={{ padding: 8, borderColor: '#D3D3D3', borderBottomWidth: 1 }}
        />
        <TouchableOpacity style={styles.containerButton} onPress={logout}>
          <Icon name="close-thick" size={25} />
          <Text style={styles.containerButtonText}>Cerrar Sesion</Text>
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
    height: 150,
    margin: 20,
    alignItems: 'center',
  },
  containerAvatarText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  containerToucheable: {
    marginTop: 20,
    height: 300,
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
    marginLeft: 18,
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    opacity: 0.5,
    letterSpacing: 0.7,
  },
  containerAvatarFooter: {
    height: 200,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default InternalMenu;
