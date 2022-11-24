import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  onPress: () => void;
  styleTouchable: any;
  styleText: any;
  title: string;
  url?: boolean;
  login?: boolean;
}

const Button = ({
  onPress,
  styleTouchable,
  styleText,
  title,
  url,
  login,
}: Props) => {
  if (login) {
    return (
      <TouchableOpacity style={{ ...styleTouchable }} onPress={onPress}>
        <Text style={{ ...styleText }}>{title}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={{ ...styleTouchable }} onPress={onPress}>
        {url && <Icon name="google" size={25} color={'#000'} />}
        {!url && <Icon name="apple" size={25} color={'#000'} />}
        <Text style={{ ...styleText }}>{title}</Text>
      </TouchableOpacity>
    );
  }
};

export default Button;
