import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.font.bold.fontFamily};
    font-size: ${({ theme }) => theme.font.bold.fontSize};
    color: ${({ theme }) => theme.pallete.gray2};
`;

export const FormContainer = styled.View`
    width: 100%;
    height: 40%;
    justify-content: flex-start;
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
