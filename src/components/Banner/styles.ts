import styled from 'styled-components/native';
import { Animated, Platform, StatusBar } from 'react-native';

export const Container = styled(Animated.View)`
    position: absolute;
    z-index: 100;
    padding: 10px 8px 8px 16px;
    width: 100%;
    padding-top: ${Platform.OS === 'android' ? `${StatusBar.currentHeight || 0}px` : 0};
    background-color: ${({ theme }) => theme.pallete.red1};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const IconContainer = styled.View`
    position: absolute;
    left: 16px;
    bottom: 20px;
`;

export const MessageContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    min-height: 50px;
`;

export const MessageText = styled.Text`
    font-family: ${({ theme }) => theme.font.regular.fontFamily};
    font-size: ${({ theme }) => theme.font.regular.fontSize};
    color: ${({ theme }) => theme.pallete.white};
    text-align: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
    background-color: transparent;
    position: absolute;
    right: 8px;
    bottom: 25px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.font.bold.fontFamily};
    font-size: ${({ theme }) => theme.font.medium.fontSize};
    color: ${({ theme }) => theme.pallete.white};
    text-transform: uppercase;
`;
