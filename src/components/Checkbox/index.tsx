import React, { FC, useCallback, useState } from 'react';
import { GestureResponderEvent, Image, PixelRatio } from 'react-native';
import { CheckboxContainer, CheckboxInput, CheckboxLabel } from './styles';
import CheckIcon from '~/assets/icons/check.png';

const PixelRatio24dp = PixelRatio.getPixelSizeForLayoutSize(24);

type CheckboxProps = {
    label: string;
    onChange: ({ checked }: { checked: boolean }) => void;
};

const Checkbox: FC<CheckboxProps> = ({ label, onChange }): JSX.Element => {
    const [checked, setChecked] = useState<boolean>(false);

    const onPress = useCallback(
        (ev: GestureResponderEvent) => {
            ev.preventDefault();
            ev.stopPropagation();
            setChecked(actualCheckboxState => !actualCheckboxState);
            onChange?.({ checked });
        },
        [checked, onChange],
    );

    return (
        <CheckboxContainer onPress={onPress}>
            <CheckboxInput onPress={onPress} checked={checked}>
                {checked && <Image width={PixelRatio24dp} height={PixelRatio24dp} source={{ uri: CheckIcon, width: 24, height: 24 }} />}
            </CheckboxInput>
            <CheckboxLabel>{label}</CheckboxLabel>
        </CheckboxContainer>
    );
};

export default Checkbox;
