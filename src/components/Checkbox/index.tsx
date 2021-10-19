import React, { FC, useCallback, useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import Icon from '~/components/Icon';
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
            <CheckboxInput checked={checked}>{checked && <Icon icon='check' size='small' />}</CheckboxInput>
            <CheckboxLabel>{label}</CheckboxLabel>
        </CheckboxContainer>
    );
};

export default Checkbox;
