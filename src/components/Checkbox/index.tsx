import React, { FC, useCallback, useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Image } from '../Image';
import { CheckboxContainer, CheckboxInput, CheckboxLabel } from './styles';

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
                {checked && <Image width={15} height={12} source={require('../../../assets/icons/checkmark.png')} />}
            </CheckboxInput>
            <CheckboxLabel>{label}</CheckboxLabel>
        </CheckboxContainer>
    );
};

export default Checkbox;
