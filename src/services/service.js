import axios from "axios";

const service = axios.create({baseURL: `${process.env.REACT_APP_UMPLE_API}/api`, headers: {
    "Access-Control-Allow-Origin": "*"
}});

export default service;

export const all = (url) => service.get(url).then(response => response);

export const show = (url) => (id) => service.get(`${url}/${id}`)
    .then(response => response)

export const create = (url) => (body, headers = {}) => service.post(url, body, headers).then(response => response);

export const update = (url) => (id, body) => service.patch(`${url}/${id}`, body)
    .then(response => response);

export const destroy = (url) => (id) => service.delete(`${url}/${id}`)

