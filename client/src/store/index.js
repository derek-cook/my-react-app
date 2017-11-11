import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import allReducers from '../reducers';

let store = null;

export default {

    createStore: () => {
        store = createStore(
            allReducers,
            applyMiddleware(thunk, logger)
        );
        return store;
    },

    currentStore: () => {
        return store;
    }
}