import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.pallete.blue1};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    height: 56px;
    width: 90%;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.font.semibold.fontFamily};
    font-size: ${({ theme }) => theme.font.semibold.fontSize};
    color: ${({ theme }) => theme.pallete.white};
    text-transform: uppercase;
`;
