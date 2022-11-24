import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  nameIcon: string;
  detail: string;
  date: string;
  value: number;
}
const BalanceItem = ({ nameIcon, detail, date, value }: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 5,
      }}>
      <View>
        <Icon name={nameIcon} size={30} color="#000" />
      </View>
      <View>
        <Text style={{ color: '#000', fontSize: 20 }}>{detail}</Text>
        <Text style={{ color: '#000', fontSize: 15 }}>{date}</Text>
      </View>
      <View>
        <Text style={{ color: 'red', fontSize: 20 }}>{`$ ${value}`}</Text>
      </View>
    </View>
  );
};

export default BalanceItem;
