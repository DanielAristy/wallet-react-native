import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface Props {
  size?: number;
}
const Avatar = ({ size }: Props) => {
  return (
    <Image
      style={avatarStyle(size)}
      source={require('../assets/images/avatar.png')}
    />
  );
};

const avatarStyle = (size?: number) => {
  return size ? { width: size, height: size } : styles.avatar;
};

const styles = StyleSheet.create({
  avatar: {
    width: 144,
    height: 144,
  },
});

export default Avatar;
