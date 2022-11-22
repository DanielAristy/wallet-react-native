import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AccountScreen from '../screens/AccountScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import LoansScreen from '../screens/LoansScreen';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
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
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? 'home-sharp' : 'home-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Loans"
          component={LoansScreen}
          options={{
            tabBarLabel: 'Loan',
            tabBarIcon: ({ color, size }) => (
              <Icon2 name="hand-holding-usd" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
