import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { Control, FieldError } from 'react-hook-form';
import { Platform } from 'react-native';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import Logo from '~/src/components/Logo';
import TextField from '~/src/components/TextField';
import { LoginMutationVariables } from '~/src/generated/graphql';
import * as S from './styles';

export enum LoginInputType {
    EMAIL,
    PASSWORD,
}

type LoginLayoutType = {
    control: Control<LoginMutationVariables>;
    errors: {
        email?: FieldError | undefined;
        password?: FieldError | undefined;
    };
    onSubmit: (event?: any) => Promise<void>;
    focusedInput: LoginInputType | null;
    setFocusedInput: Dispatch<SetStateAction<LoginInputType | null>>;
    showPassword: boolean;
    setShowPassword: Dispatch<SetStateAction<boolean>>;
    toggleStayConnected: () => void;
    passwordIcon: ReactNode;
};

const LoginLayout: FC<LoginLayoutType> = ({
    control,
    errors,
    onSubmit,
    toggleStayConnected,
    focusedInput,
    setFocusedInput,
    showPassword,
    setShowPassword,
    passwordIcon,
}): JSX.Element => (
    <S.KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <S.Container>
            <S.LogoContainer>
                <Logo />
            </S.LogoContainer>
            <S.FormContainer>
                <S.Title>Entrar na minha conta</S.Title>
                <TextField
                    labelText='E-mail'
                    control={control}
                    placeholder='Digite o seu e-mail'
                    error={errors?.email}
                    focus={focusedInput === LoginInputType.EMAIL}
                    onFocus={() => setFocusedInput(LoginInputType.EMAIL)}
                    onBlur={() => setFocusedInput(null)}
                    name='email'
                />
                <TextField
                    control={control}
                    error={errors?.password}
                    labelText='Senha'
                    placeholder='Digite a sua senha'
                    secureTextEntry={!showPassword}
                    onPressTrailingIcon={() => setShowPassword(actualShowPassword => !actualShowPassword)}
                    trailingIcon={passwordIcon}
                    focus={focusedInput === LoginInputType.PASSWORD}
                    onFocus={() => setFocusedInput(LoginInputType.PASSWORD)}
                    onBlur={() => setFocusedInput(null)}
                    name='password'
                />
                <S.SecondaryOptionsContainer>
                    <Checkbox label='Manter conectado' onChange={toggleStayConnected} />
                    <S.ForgotPasswordText>Esqueceu a senha?</S.ForgotPasswordText>
                </S.SecondaryOptionsContainer>
                <Button onPress={onSubmit} text='Entrar' />
            </S.FormContainer>
        </S.Container>
    </S.KeyboardAvoidingView>
);

export default LoginLayout;
