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

export const InputContainer = styled.View`
    width: 90%;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 16px;
`;

const getInputBorderColor = (theme: DefaultTheme, focus?: boolean, error?: boolean) => {
    if (error) {
        return theme.pallete.red1;
    }
    return focus ? theme.pallete.blue1 : theme.pallete.gray2;
};

export const Input = styled.TextInput.attrs(({ theme, focus, error }: { theme: DefaultTheme; focus?: boolean; error?: boolean }) => ({
    placeholderTextColor: `${theme.pallete.gray4}`,
    selectionColor: getInputBorderColor(theme, focus, error),
}))<{ focus?: boolean; error?: boolean }>`
    width: 100%;
    height: 50px;
    border: 1px solid ${({ theme, error, focus }) => getInputBorderColor(theme, focus, error)};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    margin-top: 8px;
    margin-bottom: 8px;
    padding-left: 16px;
`;

export const InputWithIconWrapper = styled.View`
    position: relative;
    width: 100%;
`;

export const IconContainer = styled.Pressable`
    position: absolute;
    flex: 1;
    right: 24px;
`;

export const Label = styled.Text`
    font-family: ${({ theme }) => theme.font.medium.fontFamily};
    font-size: ${({ theme }) => theme.font.medium.fontSize};
    color: ${({ theme }) => theme.pallete.gray2};
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

export const HelperText = styled.Text<{ show: boolean }>`
    display: ${({ show }) => (show ? 'flex' : 'none')};
    margin-left: 4px;
    font-family: ${({ theme }) => theme.font.regular.fontFamily};
    font-size: ${({ theme }) => theme.font.regular.fontSize};
    color: ${({ theme }) => theme.pallete.red1};
`;
