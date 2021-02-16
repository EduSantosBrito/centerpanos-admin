import React, { FC } from 'react';
import { ButtonContainer, ButtonText } from './styles';

type ButtonProps = {
    text: string;
    onPress: () => void;
};

const Button: FC<ButtonProps> = ({ text, onPress }): JSX.Element => (
    <ButtonContainer onPress={onPress}>
        <ButtonText>{text}</ButtonText>
    </ButtonContainer>
);

export default Button;
