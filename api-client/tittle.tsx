
import { Tittle } from "../models/tittle"; 
import instance from "./instance";

export const listtittle = () => {
    const url = `/gallerys`;
    return instance.get(url)
}
export const addtittle = (tittle: Tittle) => {
    const url = `/gallerys`;
    return instance.post(url, tittle)
}
export const deletetittle = (_id: number) => {
    const url = `/gallerys/${_id}`
    return instance.delete(url)
}
export const readtittle = (id: number)=> {
    const url = `/gallerys/${id}`
    return instance.get(url)
}
export const updatetittle = (tittle: Tittle) => {
    const url = `/gallerys/${tittle._id}`
    return instance.put(url, tittle)
}