import styled, { css, DefaultTheme } from 'styled-components/native';

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
`;

export const Input = styled.TextInput.attrs(({ theme, focus }: { theme: DefaultTheme; focus?: boolean }) => ({
    placeholderTextColor: `${theme.pallete.gray4}`,
    selectionColor: `${focus ? theme.pallete.blue1 : theme.pallete.gray2}`,
}))<{ focus?: boolean }>`
    width: 100%;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.pallete.gray4};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    margin-top: 8px;
    margin-bottom: 16px;
    padding-left: 16px;
    ${({ focus }) =>
        focus
            ? css`
                  border: 1px solid ${({ theme }) => theme.pallete.blue1};
              `
            : ''}
`;

export const InputWithIconWrapper = styled.View`
    position: relative;
    width: 100%;
`;

export const IconContainer = styled.Pressable`
    position: absolute;
    align-self: flex-end;
    justify-content: center;
    right: 16px;
    height: 90%;
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
