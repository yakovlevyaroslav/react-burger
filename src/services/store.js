import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducer';

export const configureStore = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk)),
    );

    return store;
}