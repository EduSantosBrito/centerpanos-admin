import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: {
            default: string;
            small: string;
        };
        font: {
            regular: {
                fontSize: string;
                fontFamily: string;
            };
            medium: {
                fontSize: string;
                fontFamily: string;
            };
            semibold: {
                fontSize: string;
                fontFamily: string;
            };
            bold: {
                fontSize: string;
                fontFamily: string;
            };
        };
        pallete: {
            gray1: string;
            gray2: string;
            gray3: string;
            gray4: string;
            gray5: string;
            gray6: string;
            white: string;
            blue1: string;
            blue2: string;
            red1: string;
            green1: string;
        };
    }
}
