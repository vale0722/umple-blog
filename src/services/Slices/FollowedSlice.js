import service from "../service";

const initialState = []

const route = 'users';

export async function refreshFollowed(dispatch) {
    let response = await service.get(route + '/followed')
    dispatch({type: 'users/followedLoaded', payload: response.data.followed})
}

export default function FollowedReducer(state = initialState, action) {
    switch (action.type) {
        case 'users/followedLoaded': {
            return action.payload
        }
        default:
            return state
    }
}