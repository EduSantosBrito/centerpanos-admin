import React, { FC, ReactNode } from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import Icon from '~/components/Icon';
import * as S from './styles';

type Props = {
    trailingIcon?: ReactNode;
    onPressTrailingIcon?: () => void;
    labelText: string;
    name: string;
    control: Control<any, object>;
    error?: FieldError;
    focus: boolean;
} & TextInputProps;

const TextField: FC<Props> = ({ labelText, control, name, error, trailingIcon, onPressTrailingIcon, focus = false, ...rest }) => (
    <S.InputContainer>
        <S.Label>{labelText}</S.Label>
        <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
                <S.FullWidthView>
                    <S.Input value={value} error={!!error} onChangeText={onChange} focus={focus} {...rest} />
                    {error ? (
                        <S.IconContainer disabled>
                            <Icon icon='error' />
                        </S.IconContainer>
                    ) : (
                        <S.IconContainer onPress={onPressTrailingIcon}>{trailingIcon}</S.IconContainer>
                    )}
                </S.FullWidthView>
            )}
            name={name}
        />
        <S.HelperText show={!!error}>{error?.message}</S.HelperText>
    </S.InputContainer>
);

export default TextField;
