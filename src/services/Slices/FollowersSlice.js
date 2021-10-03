import service from "../service";

const initialState = []

const route = 'users';

export async function refreshFollowers(dispatch) {
    let response = await service.get(route + '/followers')
    dispatch({type: 'users/followersLoaded', payload: response.data.followers})
}

export default function FollowersReducer(state = initialState, action) {
    switch (action.type) {
        case 'users/followersLoaded': {
            return action.payload
        }
        default:
            return state
    }
}