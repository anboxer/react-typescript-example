import { API } from "./base"


export function login() {
    return API.post("auth/login")
}