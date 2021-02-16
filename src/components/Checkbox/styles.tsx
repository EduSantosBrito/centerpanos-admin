import styled, { css } from 'styled-components/native';

export const CheckboxContainer = styled.Pressable`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CheckboxInput = styled.Pressable<{ checked: boolean }>`
    width: 20px;
    height: 20px;
    border: 1px solid ${({ theme }) => theme.pallete.gray4};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    margin-right: 12px;
    justify-content: center;
    align-items: center;

    ${({ checked }) =>
        checked
            ? css`
                  background-color: ${({ theme }) => theme.pallete.blue1};
                  border: 1px solid ${({ theme }) => theme.pallete.blue1};
              `
            : ''}
`;

export const CheckboxLabel = styled.Text`
    font-family: ${({ theme }) => theme.font.medium.fontFamily};
    font-size: ${({ theme }) => theme.font.medium.fontSize};
    color: ${({ theme }) => theme.pallete.gray4};
`;
