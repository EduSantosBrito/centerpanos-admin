import React from 'react';
import { Image } from 'react-native';
import LogoImage from '~/assets/logo.png';

const LogoUri = Image.resolveAssetSource(LogoImage).uri;

const Logo = () => <Image style={{ width: 123, aspectRatio: 123 / 55 }} resizeMode='cover' source={{ uri: LogoUri }} />;

export default Logo;
