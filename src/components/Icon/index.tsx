import React, { FC } from 'react';
import { Image, ImageURISource } from 'react-native';
import ErrorIcon from '~/assets/icons/error.png';
import HidePasswordIcon from '~/assets/icons/hide-password.png';
import ShowPasswordIcon from '~/assets/icons/show-password.png';
import CheckIcon from '~/assets/icons/check.png';

const ErrorIconUri = Image.resolveAssetSource(ErrorIcon).uri;
const ShowPasswordIconUri = Image.resolveAssetSource(ShowPasswordIcon).uri;
const HidePasswordIconUri = Image.resolveAssetSource(HidePasswordIcon).uri;
const CheckIconUri = Image.resolveAssetSource(CheckIcon).uri;

type Icons = 'error' | 'check' | 'show-password' | 'hide-password';
type Sizes = 'normal' | 'small' | 'large';

type Props = {
    icon: Icons;
    size?: Sizes;
};

const iconsUri: Record<Icons, string> = {
    error: ErrorIconUri,
    check: CheckIconUri,
    'show-password': ShowPasswordIconUri,
    'hide-password': HidePasswordIconUri,
};

const sizesDp: Record<Sizes, number> = {
    normal: 24,
    small: 18,
    large: 36,
};

const Icon: FC<Props> = ({ icon, size = 'normal' }) => {
    const iconUri = iconsUri[icon];
    return <Image source={{ uri: iconUri }} resizeMode='cover' style={{ width: sizesDp[size], aspectRatio: 1 }} />;
};

export default Icon;
