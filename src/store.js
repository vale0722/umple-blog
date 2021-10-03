import {createStore, applyMiddleware, combineReducers} from 'redux';
import PostReducer from "./services/Slices/PostSlice";
import NotFollowedReducer from "./services/Slices/NotFollowedSlice";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import FollowedReducer from "./services/Slices/FollowedSlice";
import FollowersReducer from "./services/Slices/FollowersSlice";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(combineReducers({
    posts: PostReducer,
    noFollowed: NotFollowedReducer,
    followed: FollowedReducer,
    followers: FollowersReducer
}), composedEnhancer)
export default store