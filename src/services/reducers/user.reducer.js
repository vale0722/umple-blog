import service from "../service";
const initialState = null

export function authUser(user) {
    return async function action(dispatch) {
        if (!user && sessionStorage.getItem('logged')) {
            let response = await service.get('me')
            user = response.data
        }

        dispatch({type: 'user/me', payload: user})
    }
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'user/me': {
            return action.payload
        }
        default:
            return state
    }
}
