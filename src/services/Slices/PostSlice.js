import service, {all} from "../service";
import {useDispatch} from "react-redux";

const initialState = []

const route = 'posts';

export async function refreshPosts(dispatch) {
    let response = await all(route)
    dispatch({ type: 'posts/postsLoaded', payload: response.data.posts })
}

export function newPost(request, headers) {
    return async function action(dispatch) {
        let response = await service.post(route, request, headers)
        dispatch({ type: 'posts/postCreated', payload: response.data.post })
    }
}

export default function postReducer(state = initialState, action)
{
    switch (action.type) {
        case 'posts/postsLoaded': {
            return action.payload
        }
        case 'posts/postCreated': {
            return [...state, action.payload]
        }
        default:
            return state
    }
}