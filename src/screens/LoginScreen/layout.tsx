import React, { Dispatch, FC, SetStateAction } from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { Image, PixelRatio } from 'react-native';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import { LoginMutationVariables } from '~/src/generated/graphql';
import ErrorIcon from '~/assets/icons/error.png';
import ShowPassword from '~/assets/icons/show-password.png';
import HidePassword from '~/assets/icons/hide-password.png';
import Logo from '~/assets/logo.png';
import * as S from './styles';

const pixelRatio = PixelRatio.getPixelSizeForLayoutSize(24);
const ErrorIconUri = Image.resolveAssetSource(ErrorIcon).uri;
const ShowPasswordUri = Image.resolveAssetSource(ShowPassword).uri;
const HidePasswordUri = Image.resolveAssetSource(HidePassword).uri;
const LogoUri = Image.resolveAssetSource(Logo).uri;

const getPasswordIcon = (hasError: boolean, showPassword: boolean) => {
    if (hasError) {
        return (
            <Image
                source={{ uri: ErrorIconUri }}
                style={{ width: PixelRatio.getPixelSizeForLayoutSize(10), height: PixelRatio.getPixelSizeForLayoutSize(10) }}
            />
        );
    }
    return !showPassword ? (
        <Image style={{ width: pixelRatio, height: pixelRatio }} source={{ uri: ShowPasswordUri, width: 24, height: 24 }} />
    ) : (
        <Image style={{ width: pixelRatio, height: pixelRatio }} source={{ uri: HidePasswordUri, width: 24, height: 24 }} />
    );
};

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
}): JSX.Element => (
    <S.Container>
        <Image style={{ width: pixelRatio, height: pixelRatio }} source={{ uri: LogoUri, width: 160, height: 71 }} />
        <S.Title>Entrar na minha conta</S.Title>
        <S.FormContainer>
            <S.InputContainer>
                <S.Label>E-mail</S.Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <S.Input
                            placeholder='Digite o seu e-mail'
                            value={value}
                            error={!!errors?.email}
                            onChangeText={onChange}
                            focus={focusedInput === LoginInputType.EMAIL}
                            onFocus={() => setFocusedInput(LoginInputType.EMAIL)}
                            onBlur={() => setFocusedInput(null)}
                        />
                    )}
                    name='email'
                />
                <S.IconContainer>
                    {!!errors?.email && (
                        <Image style={{ width: pixelRatio, height: pixelRatio }} source={{ uri: ErrorIconUri, width: 24, height: 24 }} />
                    )}
                </S.IconContainer>
                <S.HelperText show={!!errors?.email}>{errors?.email?.message ?? ''}</S.HelperText>
            </S.InputContainer>
            <S.InputContainer>
                <S.Label>Senha</S.Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <S.Input
                            placeholder='Digite a sua senha'
                            onChangeText={onChange}
                            value={value}
                            error={!!errors?.password}
                            secureTextEntry={!showPassword}
                            focus={focusedInput === LoginInputType.PASSWORD}
                            onFocus={() => setFocusedInput(LoginInputType.PASSWORD)}
                            onBlur={() => setFocusedInput(null)}
                            underlineColorAndroid='transparent'
                        />
                    )}
                    name='password'
                />
                <S.IconContainer onPress={() => setShowPassword(actualShowPassword => !actualShowPassword)}>
                    {getPasswordIcon(!!errors.password, showPassword)}
                </S.IconContainer>
                <S.HelperText show={!!errors?.password}>{errors?.password?.message ?? ''}</S.HelperText>
            </S.InputContainer>
            <S.SecondaryOptionsContainer>
                <Checkbox label='Manter conectado' onChange={toggleStayConnected} />
                <S.ForgotPasswordText>Esqueceu a senha?</S.ForgotPasswordText>
            </S.SecondaryOptionsContainer>
            <Button onPress={onSubmit} text='Entrar' />
        </S.FormContainer>
    </S.Container>
);

export default LoginLayout;
