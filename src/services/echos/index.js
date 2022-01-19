import Echo from 'laravel-echo';
import {getUser} from "../../helpers";

let user = getUser()

window.Pusher = require('pusher-js');

const options = {
    broadcaster: 'pusher',
    key: process.env.REACT_APP_PUSHER_KEY,
    cluster: process.env.REACT_APP_PUSHER_CLUSTER,
    authEndpoint: process.env.REACT_APP_BROADCASTING_URL,
    forceTLS: false,
    auth: {
        headers: {
            "Authorization": user ? user.token_type + ' ' + user.access_token : ''
        },
    },
};

const echo = new Echo(options);

export default echo;