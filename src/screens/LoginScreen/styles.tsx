import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const LogoContainer = styled.View`
    padding-bottom: 40px;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    height: 100%;
    align-items: center;
    padding-top: ${Platform.OS === 'android' ? `${(StatusBar.currentHeight || 0) + 70}px` : 70};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.font.bold.fontFamily};
    font-size: ${({ theme }) => theme.font.bold.fontSize};
    color: ${({ theme }) => theme.pallete.gray2};
    padding-bottom: 52px;
`;

export const FormContainer = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`;

export const SecondaryOptionsContainer = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

export const ForgotPasswordText = styled.Text`
    font-family: ${({ theme }) => theme.font.medium.fontFamily};
    font-size: ${({ theme }) => theme.font.medium.fontSize};
    color: ${({ theme }) => theme.pallete.blue1};
`;
