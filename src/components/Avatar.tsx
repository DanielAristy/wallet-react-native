import React from 'react';
import { Image } from 'react-native';
import { StylesComponent as Styles } from './styles/StylesComponent';

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
  return size ? { width: size, height: size, ...customStyles } : Styles.avatar;
};


export default Avatar;
