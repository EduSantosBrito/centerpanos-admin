import React, { Dispatch, FC, SetStateAction } from 'react';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import { Image } from '~/components/Image';
import { AuthContextType } from '~/contexts/Auth';
import {
    Container,
    ForgotPasswordText,
    FormContainer,
    IconContainer,
    Input,
    InputContainer,
    InputWithIconWrapper,
    Label,
    SecondaryOptionsContainer,
    Title,
} from './styles';

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
    signIn: AuthContextType['signIn'];
    toggleStayConnected: AuthContextType['toggleStayConnected'];
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
    <Container>
        <Image width={160} height={71.54} source={require('~/assets/logo.png')} />
        <Title>Entrar na minha conta</Title>
        <FormContainer>
            <InputContainer>
                <Label>E-mail</Label>
                <Input
                    placeholder='Digite o seu e-mail'
                    value={email}
                    onChangeText={setEmail}
                    focus={focusedInput === LoginInputType.EMAIL}
                    onFocus={() => setFocusedInput(LoginInputType.EMAIL)}
                    onBlur={() => setFocusedInput(null)}
                />
            </InputContainer>
            <InputContainer>
                <Label>Senha</Label>
                <InputWithIconWrapper>
                    <Input
                        placeholder='Digite a sua senha'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={showPassword}
                        focus={focusedInput === LoginInputType.PASSWORD}
                        onFocus={() => setFocusedInput(LoginInputType.PASSWORD)}
                        onBlur={() => setFocusedInput(null)}
                        underlineColorAndroid='transparent'
                    />
                    <IconContainer onPress={() => setShowPassword(actualShowPassword => !actualShowPassword)}>
                        {showPassword ? (
                            <Image width={20} height={13.64} source={require('~/assets/icons/show-password.png')} />
                        ) : (
                            <Image width={20} height={17.41} source={require('~/assets/icons/hide-password.png')} />
                        )}
                    </IconContainer>
                </InputWithIconWrapper>
            </InputContainer>
            <SecondaryOptionsContainer>
                <Checkbox label='Manter conectado' onChange={toggleStayConnected} />
                <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
            </SecondaryOptionsContainer>
            <Button onPress={signIn} text='Entrar' />
        </FormContainer>
    </Container>
);

export default LoginLayout;
