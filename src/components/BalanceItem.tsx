import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StylesComponent as Styles } from './styles/StylesComponent';

interface Props {
  detail: string;
  date: string;
  value: number;
}
const BalanceItem = ({ detail, date, value }: Props) => {
  return (
    <View style={Styles.containerMovement}>
      <View style={{ width: '10%' }}>
        <Icon name="cog-outline" size={30} color="#000" />
      </View>
      <View style={{ width: '60%' }}>
        <Text style={Styles.detailText}>{detail.substring(0, 20)}</Text>
        <Text style={Styles.dateText}>{`${date.substring(11,16)} - ${date.substring(0,10)}`}</Text>
      </View>
      <View style={{ width: '30%' }}>
        <Text style={Styles.valueText}>{`$ ${value}`}</Text>
      </View>
    </View>
  );
};

export default BalanceItem;
