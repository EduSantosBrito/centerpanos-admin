import React, { Dispatch, FC, SetStateAction } from 'react';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import { Image } from '~/components/Image';
import { LoginMutationVariables } from '~/src/generated/graphql';
import * as S from './styles';

export enum LoginInputType {
    EMAIL,
    PASSWORD,
}

type LoginLayoutType = {
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    focusedInput: LoginInputType | null;
    setFocusedInput: Dispatch<SetStateAction<LoginInputType | null>>;
    showPassword: boolean;
    setShowPassword: Dispatch<SetStateAction<boolean>>;
    signIn: (variables: LoginMutationVariables) => Promise<void>;
    toggleStayConnected: () => void;
};

const LoginLayout: FC<LoginLayoutType> = ({
    email,
    setEmail,
    password,
    setPassword,
    signIn,
    toggleStayConnected,
    focusedInput,
    setFocusedInput,
    showPassword,
    setShowPassword,
}): JSX.Element => (
    <S.Container>
        <Image width={160} height={71.54} source={require('~/assets/logo.png')} />
        <S.Title>Entrar na minha conta</S.Title>
        <S.FormContainer>
            <S.InputContainer>
                <S.Label>E-mail</S.Label>
                <S.Input
                    placeholder='Digite o seu e-mail'
                    value={email}
                    onChangeText={setEmail}
                    focus={focusedInput === LoginInputType.EMAIL}
                    onFocus={() => setFocusedInput(LoginInputType.EMAIL)}
                    onBlur={() => setFocusedInput(null)}
                />
            </S.InputContainer>
            <S.InputContainer>
                <S.Label>Senha</S.Label>
                <S.InputWithIconWrapper>
                    <S.Input
                        placeholder='Digite a sua senha'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={showPassword}
                        focus={focusedInput === LoginInputType.PASSWORD}
                        onFocus={() => setFocusedInput(LoginInputType.PASSWORD)}
                        onBlur={() => setFocusedInput(null)}
                        underlineColorAndroid='transparent'
                    />
                    <S.IconContainer onPress={() => setShowPassword(actualShowPassword => !actualShowPassword)}>
                        {showPassword ? (
                            <Image width={20} height={13.64} source={require('~/assets/icons/show-password.png')} />
                        ) : (
                            <Image width={20} height={17.41} source={require('~/assets/icons/hide-password.png')} />
                        )}
                    </S.IconContainer>
                </S.InputWithIconWrapper>
            </S.InputContainer>
            <S.SecondaryOptionsContainer>
                <Checkbox label='Manter conectado' onChange={toggleStayConnected} />
                <S.ForgotPasswordText>Esqueceu a senha?</S.ForgotPasswordText>
            </S.SecondaryOptionsContainer>
            <Button onPress={() => signIn({ email, password })} text='Entrar' />
        </S.FormContainer>
    </S.Container>
);

export default LoginLayout;
