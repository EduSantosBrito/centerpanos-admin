import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type AuthContextType = {
    signIn: () => void;
    signOut: () => void;
    toggleStayConnected: () => void;
    token: string | null;
    isSignout: boolean;
};

const AuthContext = createContext<AuthContextType>({
    signIn: () => {},
    signOut: () => {},
    toggleStayConnected: () => {},
    token: null,
    isSignout: false,
});

const LOCALSTORAGE_USER_TOKEN = 'userToken';

export const useAuth = (): AuthContextType => useContext(AuthContext);

export const AuthProvider: FC = ({ children }): JSX.Element => {
    const [token, setToken] = useState<string | null>(null);
    const [stayConnected, setStayConnected] = useState<boolean>(false);
    const [isSignout, setIsSignout] = useState<boolean>(false);

    const signIn = useCallback(async () => {
        const signInToken = 'teste';
        if (stayConnected) {
            await AsyncStorage.setItem(LOCALSTORAGE_USER_TOKEN, signInToken);
        }
        setToken(signInToken);
        setIsSignout(false);
    }, [stayConnected]);

    const signOut = useCallback(async () => {
        await AsyncStorage.removeItem(LOCALSTORAGE_USER_TOKEN);
        setToken(null);
        setIsSignout(true);
    }, []);

    const checkToken = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        setToken(userToken);
    };

    const toggleStayConnected = useCallback(() => setStayConnected(actualStayConnected => !actualStayConnected), []);

    useEffect(() => {
        checkToken();
    }, []);

    const value = useMemo<AuthContextType>(() => ({ token, signIn, signOut, toggleStayConnected, isSignout }), [
        token,
        signIn,
        signOut,
        toggleStayConnected,
        isSignout,
    ]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
