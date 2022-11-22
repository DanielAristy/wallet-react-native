import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { TabNavigation } from './TabNavigation';
import InternalMenu from './InternalMenu';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      //screenOptions={{ headerShown: false }}
      drawerContent={props => <InternalMenu {...props} />}
      initialRouteName="TabNavigation">
      <Drawer.Screen
        name="Pantalla1Screen"
        options={{ drawerLabel: 'Cambiar Contraseña' }}
        component={props => <Pantalla1Screen {...props} />}
      />
      <Drawer.Screen
        name="Pantalla2Screen"
        options={{ drawerLabel: 'Cambiar tema del App' }}
        component={props => <Pantalla2Screen {...props} />}
      />
      <Drawer.Screen
        name="TabNavigation"
        options={{ drawerLabel: 'Cerrar Sesion' }}
        component={props => <TabNavigation {...props} />}
      />
    </Drawer.Navigator>
  );
};
