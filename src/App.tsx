import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Navigator } from '~/src/Navigator';
import store from '~/src/store';

const theme: DefaultTheme = {
    borderRadius: {
        default: '6px',
        small: '4px',
    },
    font: {
        regular: {
            fontFamily: 'InterRegular',
            fontSize: '12px',
        },
        medium: {
            fontFamily: 'InterMedium',
            fontSize: '12px',
        },
        semibold: {
            fontFamily: 'InterSemiBold',
            fontSize: '16px',
        },
        bold: {
            fontFamily: 'InterBold',
            fontSize: '20px',
        },
    },
    pallete: {
        gray1: '#333333',
        gray2: '#4F4F4F',
        gray3: '#828282',
        gray4: '#BDBDBD',
        gray5: '#E0E0E0',
        gray6: '#F2F2F2',
        white: '#FFFFFF',
        blue1: '#3A75EC',
        blue2: '#3A75EC',
        red1: '#EC3137',
        green1: '#11A075',
    },
};

const queryClient = new QueryClient();

export default function App() {
    const customFonts = {
        InterRegular: require('~/assets/fonts/Inter-Regular.ttf'),
        InterMedium: require('~/assets/fonts/Inter-Medium.ttf'),
        InterSemiBold: require('~/assets/fonts/Inter-SemiBold.ttf'),
        InterBold: require('~/assets/fonts/Inter-Bold.ttf'),
    };

    const [isLoaded] = useFonts(customFonts);

    if (!isLoaded) {
        return <AppLoading />;
    }

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <Navigator />
                </ThemeProvider>
            </QueryClientProvider>
        </Provider>
    );
}
