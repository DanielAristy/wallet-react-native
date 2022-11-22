import React from 'react';
import { Image, StyleSheet } from 'react-native';

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
    : styles.avatar;
};

const styles = StyleSheet.create({
  avatar: {
    width: 144,
    height: 144,
  },
});

export default Logo;
