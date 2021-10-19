import React, { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { closeBanner } from '~/src/ducks/banner';
import { RootState } from '~/src/store';
import Icon from '~/components/Icon';
import * as S from './styles';

const Banner = () => {
    const slideValue = useRef(new Animated.Value(-120)).current;
    const message = useSelector((state: RootState) => state.banner.message);
    const dispatch = useDispatch();

    const handleReset = useCallback(() => {
        dispatch(closeBanner());
    }, [dispatch]);

    useEffect(() => {
        Animated.timing(slideValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [handleReset, slideValue]);

    return (
        <S.Container style={{ transform: [{ translateY: slideValue }] }}>
            <S.IconContainer>
                <Icon icon='error-white' />
            </S.IconContainer>
            <S.MessageContainer>
                <S.MessageText>{message}</S.MessageText>
            </S.MessageContainer>
            <S.ButtonContainer onPress={handleReset}>
                <S.ButtonText>Fechar</S.ButtonText>
            </S.ButtonContainer>
        </S.Container>
    );
};

export default Banner;
