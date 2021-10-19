const OPEN_BANNER = 'centerpanos-admin/banner/OPEN_BANNER';
const CLOSE_BANNER = 'centerpanos-admin/banner/CLOSE_BANNER';
const SET_MESSAGE = 'centerpanos-admin/banner/SET_MESSAGE';

export type State = {
    open: boolean;
    message: string;
};

type Action = {
    type: string;
    value: any;
};

export const initialState: State = {
    open: false,
    message: '',
};

export default function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case OPEN_BANNER:
            return {
                ...state,
                open: true,
            };
        case CLOSE_BANNER:
            return {
                ...state,
                open: false,
                message: '',
            };
        case SET_MESSAGE:
            return {
                ...state,
                ...action.value,
            };
        default:
            return state;
    }
}

export const setBannerMessage = (message: string) => ({
    type: SET_MESSAGE,
    value: {
        message,
    },
});

export const openBanner = () => ({
    type: OPEN_BANNER,
});

export const closeBanner = () => ({
    type: CLOSE_BANNER,
});
