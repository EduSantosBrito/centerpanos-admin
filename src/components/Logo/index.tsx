import React from 'react';
import { Image } from 'react-native';
import LogoImage from '~/assets/logo.png';

const LogoUri = Image.resolveAssetSource(LogoImage).uri;

const Logo = () => <Image style={{ width: 160, aspectRatio: 160 / 71.54 }} resizeMode='cover' source={{ uri: LogoUri }} />;

export default Logo;
