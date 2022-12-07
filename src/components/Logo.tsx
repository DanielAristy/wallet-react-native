import React from 'react';
import { Image } from 'react-native';
import { StylesComponent as Styles } from './styles/StylesComponent';

interface Props {
  size?: number;
}
const Logo = ({ size }: Props) => {
  return (
    <Image
      style={avatarStyle(size)}
      source={require('../assets/images/avatar.png')}
    />
  );
};

const avatarStyle = (size?: number) => {
  return size ? { width: size, height: size } : Styles.logo;
};

export default Logo;
