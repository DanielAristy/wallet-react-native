import React, { useEffect, useState } from 'react';
import { Text, View, BackHandler } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BalanceItem from '../components/BalanceItem';
import { Styles } from '../styles/Styles';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import { useSelector } from 'react-redux';
import useHttp from '../hooks/useHttp';

const AccountScreen = ({ navigation }: MyStackScreenProps) => {
  const { client } = useSelector((state: any) => state.client);
  const { getAccountById } = useHttp();

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

  useEffect(() => {
    const getAccount = async (id: string) => {
      await getAccountById(id);
    };
    if (client) {
      getAccount(client.account.id);
    }
  });

  return (
    <View style={Styles.accountScreenContainer}>
      <View style={Styles.accountScreenContainerAccout}>
        <View style={Styles.accountScreenContainerBalance}>
          <Text
            style={
              Styles.accountScreenContainerBalanceValue
            }>{`$ ${client.account.balance}`}</Text>
          <Text style={Styles.accountScreenContainerBalanceText}>
            Balance in your account
          </Text>
        </View>
      </View>
      <View style={Styles.accountScreenContainerFlatList}>
        {client.account.movements && (
          <FlatList
            data={client.account.movements}
            renderItem={({ item }) => (
              <BalanceItem
                detail={item.reason}
                date={item.date}
                value={item.amount}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default AccountScreen;
