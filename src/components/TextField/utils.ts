import { ColorValue } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

export const getInputBorderColor = (theme: DefaultTheme, focus?: boolean, error?: boolean): ColorValue => {
    if (error) {
        return theme.pallete.red1;
    }
    return focus ? theme.pallete.blue1 : theme.pallete.gray2;
};
