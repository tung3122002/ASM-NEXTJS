import { User } from "../models/user";
import instance from "./instance";

export const signup = (user:User) => {
    const url = `/signup`;
    return instance.post(url, user)   
}
export const signin = (user:User) => {
    const url = `/signin`;
    return instance.post(url, user)   
}
export const list = (user:User) => {
    const url = `/user`;
    return instance.get(url)
}
