import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

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
        {url && <Image source={require('../assets/images/google.png')} />}
        {!url && <Image source={require('../assets/images/appleIcon.png')} />}
        <Text style={{ ...styleText }}>{title}</Text>
      </TouchableOpacity>
    );
  }
};

export default Button;
