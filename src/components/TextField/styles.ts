import { ColorValue } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';
import { getInputBorderColor } from './utils';

export const FullWidthView = styled.View`
    width: 100%;
`;

export const InputContainer = styled.View`
    width: 90%;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 16px;
`;

export const Label = styled.Text`
    font-family: ${({ theme }) => theme.font.medium.fontFamily};
    font-size: ${({ theme }) => theme.font.medium.fontSize};
    color: ${({ theme }) => theme.pallete.gray2};
`;

export const HelperText = styled.Text<{ show: boolean }>`
    display: ${({ show }) => (show ? 'flex' : 'none')};
    margin-left: 4px;
    font-family: ${({ theme }) => theme.font.regular.fontFamily};
    font-size: ${({ theme }) => theme.font.regular.fontSize};
    color: ${({ theme }) => theme.pallete.red1};
`;

export const IconContainer = styled.TouchableOpacity`
    position: absolute;
    flex: 1;
    align-items: center;
    justify-content: center;
    right: 24px;
    height: 100%;
`;

export const Input = styled.TextInput.attrs(({ theme, focus, error }: { theme: DefaultTheme; focus?: boolean; error?: boolean }) => ({
    placeholderTextColor: `${theme.pallete.gray4}` as ColorValue,
    selectionColor: getInputBorderColor(theme, focus, error),
}))<{ focus?: boolean; error?: boolean }>`
    width: 100%;
    height: 50px;
    border: 1px solid ${({ theme, error, focus }) => String(getInputBorderColor(theme, focus, error))};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    margin-top: 8px;
    margin-bottom: 8px;
    padding-left: 16px;
    position: relative;
`;
