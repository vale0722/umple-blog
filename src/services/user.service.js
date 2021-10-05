import service from "./service";

export const userService = {login, logout, register};

function login(request) {
    return service.post('login', request)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user.data));
            return user;
        }).catch(e => {
                if (e.status === 401) {
                    logout();
                    // eslint-disable-next-line no-restricted-globals
                    location.reload(true);
                }

                const error = (e && e.message) || e.statusText;
                return Promise.reject(error);
            }
        );
}

function register(request, headers) {
    return service.post('register', request, headers)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user.data));
            return user;
        }).catch(e => {
                if (e.status === 401) {
                    logout();
                    // eslint-disable-next-line no-restricted-globals
                    location.reload(true);
                }

                const error = (e && e.message) || e.statusText;
                return Promise.reject(error);
            }
        );
}

function logout() {
    localStorage.removeItem('user');
}