import React, { useContext, useEffect } from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StylesComponent as Styles } from './styles/StylesComponent';
import Avatar from './Avatar';
import { AuthContext } from '../context/AuthContext';

const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {
  const { logout, loggedIn, userData } = useContext(AuthContext);
  useEffect(() => {
    if (loggedIn === false) {
      navigation.navigate('Auth');
    }
  }, [loggedIn]);

  return (
    <DrawerContentScrollView>
      {userData && (
        <>
          <View style={Styles.containerAvatar}>
            <Avatar
              size={100}
              validUrl
              url={userData.picture}
              customStyles={{ borderRadius: 50, resizeMode: 'contain' }}
            />
            <Text style={Styles.containerAvatarText}>{userData.name}</Text>
          </View>
          <View style={Styles.containerToucheable}>
            <TouchableOpacity
              style={Styles.containerButton}
              onPress={() => navigation.navigate('ChangePassword')}>
              <Icon name="cog-outline" size={25} />
              <Text style={Styles.containerButtonText}>Cambiar Contraseña</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.containerButton}
              onPress={() => navigation.navigate('SettingThemeApp')}>
              <Icon name="bookmark" size={25} />
              <Text style={Styles.containerButtonText}>
                Cambiar tema del app
              </Text>
            </TouchableOpacity>
            <View style={Styles.containerLine} />
            <TouchableOpacity style={Styles.containerButton} onPress={logout}>
              <Icon name="close-thick" size={25} />
              <Text style={Styles.containerButtonText}>Cerrar Sesion</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.containerAvatarFooter}>
            <Avatar size={120} />
          </View>
        </>
      )}
    </DrawerContentScrollView>
  );
};

export default InternalMenu;
