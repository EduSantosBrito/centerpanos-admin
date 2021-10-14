import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn, toggleStayConnected } from '~/src/ducks/auth';
import { DefaultError, LoginMutationVariables, LoginResponse, LoginSuccessfully, useLoginMutation } from '~/src/generated/graphql';
import LoginLayout, { LoginInputType } from './layout';

const Login: FC = (): JSX.Element => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [focusedInput, setFocusedInput] = useState<LoginInputType | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const signInMutation = useLoginMutation();
    const dispatch = useDispatch();

    const isLoginSuccessfully = (response: LoginResponse): response is LoginSuccessfully => response.__typename === 'LoginSuccessfully';
    const isLoginFailed = (response: LoginResponse): response is DefaultError => response.__typename === 'DefaultError';

    const handleSignIn = async (variables: LoginMutationVariables) => {
        const response = await signInMutation.mutateAsync(variables);
        if (isLoginSuccessfully(response.login as LoginResponse)) {
            const loginSuccessfully = response.login as LoginSuccessfully;
            dispatch(signIn(loginSuccessfully.token as string));
        } else if (isLoginFailed(response.login as LoginResponse)) {
            const error = response.login as DefaultError;
            console.log(error);
        }
    };

    return (
        <LoginLayout
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            signIn={handleSignIn}
            toggleStayConnected={() => dispatch(toggleStayConnected())}
            focusedInput={focusedInput}
            setFocusedInput={setFocusedInput}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
        />
    );
};

export default Login;
