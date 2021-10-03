import service from "../service";

const initialState = []

const route = 'posts';

export async function refreshPosts(dispatch) {
    let response = await service.get(route)
    dispatch({ type: 'posts/postsLoaded', payload: response.data.posts })
}

export function newPost(request, headers) {
    return async function action(dispatch) {
        let response = await service.post(route, request, headers)
        dispatch({ type: 'posts/postCreated', payload: response.data.post })
        dispatch(refreshPosts);
    }
}

export function deletePost(post) {
    return async function action(dispatch) {
        let response = await service.delete(`${route}/${post}`)
        dispatch({ type: 'posts/postDeleted', payload: response.data.message })
        dispatch(refreshPosts);
    }
}

export function interaction(post, interaction) {
    return async function action(dispatch) {
        let response = await service.patch(`${route}/${post}/interactions`, {type: interaction ?? 'like'})
        dispatch({ type: 'posts/postInteractionAdded', payload: response.data.post })
        dispatch(refreshPosts);
    }
}

export function comment(post, data) {
    return async function action(dispatch) {
        let response = await service.patch(`${route}/${post}/comments`, data)
        dispatch({ type: 'posts/postInteractionAdded', payload: response.data.post })
        dispatch(refreshPosts);
    }
}

export default function postReducer(state = initialState, action)
{
    switch (action.type) {
        case 'posts/postsLoaded': {
            return action.payload
        }
        case 'posts/postCreated':
        case 'posts/postDeleted':
        case 'posts/postInteractionAdded': {
            return [...state, action.payload]
        }
        default:
            return state
    }
}