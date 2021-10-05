import axios from "axios";
import {getUser} from "../helpers";

let user = getUser()

const service = axios.create({baseURL: `${process.env.REACT_APP_UMPLE_API}/api`, headers: {
    "Access-Control-Allow-Origin": "*",
    "Authorization": user ? user.token_type + ' ' + user.access_token : ''
}});

export default service;