import React, { FC, useState } from 'react';
import { useAuth } from '~/contexts/Auth';
import LoginLayout, { LoginInputType } from './layout';

const Login: FC = (): JSX.Element => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [focusedInput, setFocusedInput] = useState<LoginInputType | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { signIn, toggleStayConnected } = useAuth();

    return (
        <LoginLayout
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            signIn={signIn}
            toggleStayConnected={toggleStayConnected}
            focusedInput={focusedInput}
            setFocusedInput={setFocusedInput}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
        />
    );
};

export default Login;
