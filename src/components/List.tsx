import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import BalanceItem from './BalanceItem';

const List = ({ list }: any) => {
  return (
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
  );
};

export default List;
