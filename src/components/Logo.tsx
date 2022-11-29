import React from 'react';
import { Image } from 'react-native';
import { StylesComponent as Styles } from './styles/StylesComponent';

interface Props {
  size?: number;
  marginTop?: number;
}
const Logo = ({ size, marginTop }: Props) => {
  return (
    <Image
      style={avatarStyle(size, marginTop)}
      source={require('../assets/images/avatar.png')}
    />
  );
};

const avatarStyle = (size?: number, marginTop?: number) => {
  return size
    ? { width: size, height: size, marginTop: marginTop }
    : Styles.logo;
};

export default Logo;
