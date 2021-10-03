import axios from "axios";

const service = axios.create({baseURL: `${process.env.REACT_APP_UMPLE_API}/api`, headers: {
    "Access-Control-Allow-Origin": "*"
}});

export default service;