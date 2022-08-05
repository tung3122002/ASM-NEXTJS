
import { Story } from "../models/story"; 
import instance from "./instance";

export const liststory = () => {
    const url = `/story`;
    return instance.get(url)
}
export const addstory = (story: Story) => {
    const url = `/story`;
    return instance.post(url, story)
}
export const deletestory= (_id: number) => {
    const url = `/story/${_id}`
    return instance.delete(url)
}
export const readstory = (id: number)=> {
    const url = `/story/${id}`
    return instance.get(url)
}
export const updatestory = (story: Story) => {
    const url = `/story/${story._id}`
    return instance.put(url, story)
}