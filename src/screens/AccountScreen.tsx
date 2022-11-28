import React, { useEffect, useState } from 'react';
import { Text, View, BackHandler } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BalanceItem from '../components/BalanceItem';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

const AccountScreen = ({ navigation }: MyStackScreenProps) => {
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        navigation.navigate('TabNavigation');
        return true;
      } else {
        return false;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  const [balance, setBalance] = useState('642.467.600');
  const list = [
    {
      nameIcon: 'cog-outline',
      detail: 'Semestre Universidad',
      date: new Date().toISOString(),
      value: 150000,
    },

    {
      nameIcon: 'cog-outline',
      detail: 'Pago Nomina',
      date: new Date().toISOString(),
      value: 3000000,
    },
    {
      nameIcon: 'cog-outline',
      detail: 'Pago Nomina',
      date: new Date().toISOString(),
      value: 3000000,
    },
    {
      nameIcon: 'cog-outline',
      detail: 'Pago Nomina',
      date: new Date().toISOString(),
      value: 3000000,
    },
    {
      nameIcon: 'cog-outline',
      detail: 'Pago Nomina',
      date: new Date().toISOString(),
      value: 3000000,
    },
    {
      nameIcon: 'cog-outline',
      detail: 'Pago Nomina',
      date: new Date().toISOString(),
      value: 3000000,
    },
    {
      nameIcon: 'cog-outline',
      detail: 'Pago Nomina',
      date: new Date().toISOString(),
      value: 3000000,
    },
    {
      nameIcon: 'cog-outline',
      detail: 'Pago Nomina',
      date: new Date().toISOString(),
      value: 3000000,
    },
    {
      nameIcon: 'cog-outline',
      detail: 'Pago Nomina',
      date: new Date().toISOString(),
      value: 3000000,
    },
    {
      nameIcon: 'cog-outline',
      detail: 'Pago Nomina',
      date: new Date().toISOString(),
      value: 3000000,
    },
  ];
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          height: '30%',
        }}>
        <View
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'blue',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 50,
            }}>{`$ ${balance}`}</Text>
          <Text style={{ color: '#fff', marginTop: 5 }}>
            Balance in your account
          </Text>
        </View>
      </View>
      <View
        style={{
          height: '70%',
        }}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <BalanceItem
              nameIcon={item.nameIcon}
              detail={item.detail}
              date={item.date}
              value={item.value}
            />
          )}
        />
      </View>
    </View>
  );
};

export default AccountScreen;
