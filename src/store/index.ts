import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import AuthReducer, { State as AuthState } from '~/ducks/auth';
import BannerReducer, { State as BannerState } from '~/ducks/banner';

export type RootState = { auth: AuthState; banner: BannerState };

const reducer = combineReducers({
    auth: AuthReducer,
    banner: BannerReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
