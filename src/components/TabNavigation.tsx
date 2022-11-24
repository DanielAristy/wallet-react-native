import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/AccountScreen';
import LoansScreen from '../screens/LoansScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'purple',
      }}>
      <Tab.Screen
        name="My App"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Loans"
        component={LoansScreen}
        options={{
          tabBarLabel: 'Loan',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarLabel: 'Payment',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
