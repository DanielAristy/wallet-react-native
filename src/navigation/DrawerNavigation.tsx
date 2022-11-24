import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigation } from './TabNavigation';
import InternalMenu from '../components/InternalMenu';
import { ChangePasswordScreen } from '../screens/ChangePasswordScreen';
import LoginScreen from '../screens/LoginScreen';
import { SettingThemeApp } from '../screens/SettingThemeAppScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: 'Wallet',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: 'blue',
        },
      }}
      drawerContent={props => <InternalMenu {...props} />}
      initialRouteName="Login">
      <Drawer.Screen
        name="Login"
        options={{
          drawerLabel: 'Tabs',
          headerShown: false,
          swipeEnabled: false,
        }}>
        {(props: any) => <LoginScreen {...props} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="ChangePassword"
        options={{
          drawerLabel: 'Cambiar Contraseña',
        }}>
        {(props: any) => <ChangePasswordScreen {...props} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="SettingThemeApp"
        options={{ drawerLabel: 'Cambiar tema del App' }}>
        {(props: any) => <SettingThemeApp {...props} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="TabNavigation"
        options={{ drawerLabel: 'Tabs', unmountOnBlur: true }}>
        {() => <TabNavigation />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
