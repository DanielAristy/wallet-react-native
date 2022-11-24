import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigation } from './TabNavigation';
import InternalMenu from './InternalMenu';
import { ChangePasswordScreen } from '../screens/drawers/ChangePasswordScreen';
import LoginScreen from '../screens/LoginScreen';
import { SettingThemeApp } from '../screens/drawers/SettingThemeAppScreen';

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
