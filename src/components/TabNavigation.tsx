import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/AccountScreen';
import LoansScreen from '../screens/LoansScreen';

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
        }}
      />

      <Tab.Screen
        name="Loans"
        component={LoansScreen}
        options={{
          tabBarLabel: 'Loan',
        }}
      />
    </Tab.Navigator>
  );
};
