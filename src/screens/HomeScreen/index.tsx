import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { signOut } from '~/src/ducks/auth';
import * as S from './styles';

const Home: FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(signOut());
    };
    return (
        <S.Container>
            <Text>Home page</Text>
            <Button onPress={handleSignOut} title='Logout' />
        </S.Container>
    );
};

export default Home;
