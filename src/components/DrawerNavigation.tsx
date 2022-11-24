import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ChangePasswordScreen } from '../screens/ChangePasswordScreen';
import { SettingThemeApp } from '../screens/SettingThemeAppScreen';
import { TabNavigation } from './TabNavigation';
import InternalMenu from './InternalMenu';
import LoginScreen from '../screens/LoginScreen';
import { MyDrawerContentProps } from '../screens/interfaces/MyDrawerContentProps';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ title: 'Wallet' }}
      // screenOptions={{ headerShown: false }}
      drawerContent={props => <InternalMenu {...props} />}
      initialRouteName="Login">
      <Drawer.Screen
        name="ChangePassword"
        options={{ drawerLabel: 'Cambiar Contraseña' }}>
        {(props: any) => <ChangePasswordScreen {...props} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="SettingThemeApp"
        options={{ drawerLabel: 'Cambiar tema del App' }}>
        {(props: any) => <SettingThemeApp {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="Login" options={{ drawerLabel: 'Tabs' }}>
        {(props: any) => <LoginScreen {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="TabNavigation" options={{ drawerLabel: 'Tabs' }}>
        {() => <TabNavigation />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
