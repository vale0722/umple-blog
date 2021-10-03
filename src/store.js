import {createStore, applyMiddleware, combineReducers} from 'redux';
import PostReducer from "./services/Slices/PostSlice";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(combineReducers({
    posts: PostReducer
}), composedEnhancer)
export default store