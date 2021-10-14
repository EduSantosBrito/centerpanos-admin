import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import HomeScreen from '~/screens/HomeScreen';
import LoginScreen from '~/screens/LoginScreen';
import { RootState } from '~/src/store';

const Stack = createStackNavigator();

export const Navigator: FC = () => {
    const token = useSelector((store: RootState) => store.auth.token);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {token ? (
                    <>
                        <Stack.Screen name='Home' component={HomeScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name='Login' component={LoginScreen} options={{ animationTypeForReplace: 'push' }} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
