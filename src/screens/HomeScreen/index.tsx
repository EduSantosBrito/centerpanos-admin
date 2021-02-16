import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { useAuth } from '../../contexts/Auth';

const Home: FC = (): JSX.Element => {
    const { signOut } = useAuth();

    return (
        <View>
            <Text>Home page</Text>
            <Button onPress={signOut} title='Logout' />
        </View>
    );
};

export default Home;
