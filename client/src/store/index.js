import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers';

let store = null;

export default {

    createStore: () => {
        store = createStore(
            allReducers,
            applyMiddleware(thunk)
        );
        return store;
    },

    currentStore: () => {
        return store;
    }
}