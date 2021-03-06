import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {default as thunk} from 'redux-thunk';

import authReducer from './reducers/auth';
import uiReducer from './reducers/ui';

const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore;