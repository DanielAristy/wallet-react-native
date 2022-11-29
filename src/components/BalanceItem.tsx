import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StylesComponent as Styles } from './styles/StylesComponent';

interface Props {
  nameIcon: string;
  detail: string;
  date: string;
  value: number;
}
const BalanceItem = ({ nameIcon, detail, date, value }: Props) => {
  return (
    <View style={Styles.containerMovement}>
      <View>
        <Icon name={nameIcon} size={30} color="#000" />
      </View>
      <View>
        <Text style={Styles.detailText}>{detail}</Text>
        <Text style={Styles.dateText}>{date}</Text>
      </View>
      <View>
        <Text style={Styles.valueText}>{`$ ${value}`}</Text>
      </View>
    </View>
  );
};

export default BalanceItem;
