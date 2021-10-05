import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { followed } from "./followed.reducer";
import { followers } from "./followers.reducer";
import { not_followed } from "./not_followed.reducer";
import { posts } from "./post.reducer";

const rootReducer = combineReducers({
    authentication,
    followed,
    followers,
    not_followed,
    posts
});

export default rootReducer;