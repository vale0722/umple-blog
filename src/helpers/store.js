import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from "../services/reducers";

const rootReducer = (state, action) => {
    if (action.type === 'RESET_APP') {
        state = undefined;
    }

    return reducer(state, action);
}


export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);