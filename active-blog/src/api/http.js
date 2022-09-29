import axios from "axios";
const baseURL = "http://active-info.onrender.com"
const http = axios.create({
    baseURL:baseURL
})

export default http;