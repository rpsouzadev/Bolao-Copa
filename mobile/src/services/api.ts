import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.240.142.111:3333"
})
