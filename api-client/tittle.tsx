
import instance from "./instance";
import { Tittle } from "../models/tittle";
export const list = () => {
    const url = `/tittle`;
    return instance.get(url);
  };
  export const add = (tittle) => {
    const url = `/tittle`;
    return instance.post(url, tittle);
  };
  export const read = (id: number) => {
    const url = `/tittle/${id}`;
    return instance.get(url);
  };
  export const remove = (id: number|string) => {
    const url = `/tittle/${id}`;
    return instance.delete(url);
  };
  export const update = (tittle: Tittle) => {
    const url = `/tittle/${tittle._id}`;
    return instance.put(url, tittle);
  };