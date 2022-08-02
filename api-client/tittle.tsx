
import { Tittle } from "../models/tittle"; 
import instance from "./instance";

export const listtittle = () => {
    const url = `/tittle`;
    return instance.get(url)
}
export const addtittle = (tittle: Tittle) => {
    const url = `/tittle`;
    return instance.post(url, tittle)
}
export const removetittle = (_id: number) => {
    const url = `/tittle/${_id}`
    return instance.delete(url)
}
export const readtittle = (slug: string | undefined) => {
    const url = `/tittle/${slug}`
    return instance.get(url)
}
export const updatetittle = (tittle: Tittle) => {
    const url = `/tittle/${tittle._id}`
    return instance.put(url, tittle)
}