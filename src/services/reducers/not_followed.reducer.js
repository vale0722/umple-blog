import service from "../service";
import {refreshPosts} from "./post.reducer";
import {refreshFollowed} from "./followed.reducer";

const initialState = []

const route = 'users';

export async function refreshNotFollowed(dispatch) {
    let response = await service.get(route + '/not-followed')
    dispatch({type: 'users/notFollowedLoaded', payload: response.data.notFollowed})
}

export function followUser(user) {
    return async function action(dispatch) {
        let response = await service.patch(route + `/followed/${user}`, [])
        dispatch({ type: 'users/userFollowed', payload: response.data.message })
        dispatch(refreshNotFollowed);
        dispatch(refreshFollowed);
        dispatch(refreshPosts);
    }
}

export function not_followed(state = initialState, action) {
    switch (action.type) {
        case 'users/notFollowedLoaded': {
            return action.payload
        }
        default:
            return state
    }
}