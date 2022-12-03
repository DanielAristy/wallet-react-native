import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigation } from './TabNavigation';
import InternalMenu from '../components/InternalMenu';
import { ChangePasswordScreen } from '../screens/ChangePasswordScreen';
import { SettingThemeApp } from '../screens/SettingThemeAppScreen';
import AuthScreen from '../screens/AuthScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

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
      initialRouteName="Welcome">
      <Drawer.Screen
        name="Auth"
        options={{
          drawerLabel: 'Tabs',
          headerShown: false,
          swipeEnabled: false,
        }}
        component={AuthScreen}
      />
      <Drawer.Screen
        name="Welcome"
        options={{
          drawerLabel: 'Tabs',
          headerShown: false,
          swipeEnabled: false,
        }}
        component={WelcomeScreen}
      />
      <Drawer.Screen
        name="ChangePassword"
        options={{
          drawerLabel: 'Cambiar Contraseña',
        }}
        component={ChangePasswordScreen}
      />
      <Drawer.Screen
        name="SettingThemeApp"
        options={{ drawerLabel: 'Cambiar tema del App' }}
        component={SettingThemeApp}
      />
      <Drawer.Screen
        name="TabNavigation"
        options={{ drawerLabel: 'Tabs', unmountOnBlur: true }}
        component={TabNavigation}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
