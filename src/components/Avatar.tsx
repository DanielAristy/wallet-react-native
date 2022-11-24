import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface Props {
  size?: number;
  customStyles?: any;
  url?: string;
  validUrl?: boolean;
}
const Avatar = ({ size, customStyles, url, validUrl }: Props) => {
  if (validUrl) {
    return (
      <Image style={avatarStyle(size, customStyles)} source={{ uri: url }} />
    );
  } else {
    return (
      <Image
        style={avatarStyle(size, customStyles)}
        source={require('../assets/images/avatar.png')}
      />
    );
  }
};

const avatarStyle = (size?: number, customStyles?: any) => {
  return size ? { width: size, height: size, ...customStyles } : styles.avatar;
};

const styles = StyleSheet.create({
  avatar: {
    width: 144,
    height: 144,
    borderRadius: 50,
  },
});

export default Avatar;
