import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { useAuth } from './contexts/Auth';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

export const Navigator: FC = () => {
    const { isSignout, token } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {token ? (
                    <>
                        <Stack.Screen name='Home' component={HomeScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name='Login'
                            component={LoginScreen}
                            options={{
                                animationTypeForReplace: isSignout ? 'pop' : 'push',
                            }}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
