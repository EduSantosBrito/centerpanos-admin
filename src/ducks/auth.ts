const SIGN_IN = 'centerpanos-admin/auth/SIGN_IN';
const SIGN_OUT = 'centerpanos-admin/auth/SIGN_OUT';
const TOGGLE_STAY_CONNECTED = 'centerpanos-admin/auth/TOGGLE_STAY_CONNECTED';

export type State = {
    token: string;
    stayConnected: boolean;
};

type Action = {
    type: string;
    value: any;
};

export const initialState: State = {
    token: '',
    stayConnected: false,
};

export default function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                ...action.value,
            };
        case SIGN_OUT:
            return initialState;
        case TOGGLE_STAY_CONNECTED:
            return {
                ...state,
                stayConnected: !state.stayConnected,
            };
        default:
            return state;
    }
}

export const signIn = (token: string) => ({
    type: SIGN_IN,
    value: {
        token,
    },
});

export const signOut = () => ({
    type: SIGN_OUT,
});

export const toggleStayConnected = () => ({ type: TOGGLE_STAY_CONNECTED });
