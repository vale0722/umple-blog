import {userConstants} from '../../constants';
import {userService} from "../user.service";

export const userActions = {
    login,
    logout,
    register
};

function request(user) {
    return {type: userConstants.LOGIN_REQUEST, user}
}

function success(user) {
    return {type: userConstants.LOGIN_SUCCESS, user}
}

function failure(error) {
    return {type: userConstants.LOGIN_FAILURE, error}
}

function login(requestData) {
    return dispatch => {
        dispatch(request({requestData}));

        userService.login(requestData)
            .then(async user => {
                    await dispatch(success(user))
                    // eslint-disable-next-line no-restricted-globals
                    location.reload();
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };
}


function register(requestData, headers) {
    return dispatch => {
        dispatch(request({requestData}));

        userService.register(requestData, headers)
            .then(async user => {
                    await dispatch(success(user))
                    // eslint-disable-next-line no-restricted-globals
                    location.reload();
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };
}

function logout() {
    userService.logout();
    return {type: userConstants.LOGOUT};
}