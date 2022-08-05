import { User } from "../models/user";
import instance from "./instance";

export const signup = (user: User) => {
    const url = `/signup`;
    return instance.post(url, user)
}
export const signin = (user: User) => {
    const url = `/signin`;
    return instance.post(url, user)
}
export const list = (user: User) => {
    const url = `/user`;
    return instance.get(url)
}
export const remove = (id: number | string) => {
    const url = `/user/${id}`;
    return instance.delete(url);
};
export const update = (user: User) => {
    const url = `/user/${user._id}`;
    return instance.put(url, user);
};
export const read = (id: number) => {
    const url = `/user/${id}`;
    return instance.get(url);
  };
