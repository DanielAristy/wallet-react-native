import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/tabs/AccountScreen';
import LoansScreen from '../screens/tabs/LoansScreen';
import PaymentScreen from '../screens/tabs/PaymentScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: { backgroundColor: 'blue' },
      }}>
      <Tab.Screen
        name="My App"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          headerShown: false,
          tabBarIcon: props => (
            <Icon name="home" size={props.size} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Loans"
        component={LoansScreen}
        options={{
          tabBarLabel: 'Loans',
          headerShown: false,
          tabBarIcon: props => (
            <Icon name="cards-heart" size={props.size} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarLabel: 'Payment',
          headerShown: false,
          tabBarIcon: props => (
            <Icon
              name="credit-card-check-outline"
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
