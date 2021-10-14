import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import AuthReducer, { State as AuthState } from '~/ducks/auth';

export type RootState = { auth: AuthState };

const reducer = combineReducers({
    auth: AuthReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
