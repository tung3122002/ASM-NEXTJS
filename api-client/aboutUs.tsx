import { aboutUs } from "../models/aboutUS";

import instance from "./instance";

export const list = () => {
  const url = `/aboutUs`;
  return instance.get(url);
};
export const add = (aboutUs :aboutUs) => {
  const url = `/aboutUs`;
  return instance.post(url, aboutUs);
};
export const read = (id: number) => {
  const url = `/aboutUs/${id}`;
  return instance.get(url);
};
export const remove = (id: number|string) => {
  const url = `/aboutUs/${id}`;
  return instance.delete(url);
};
export const update = (aboutUs: aboutUs) => {
  const url = `/aboutUs/${aboutUs._id}`;
  return instance.put(url, aboutUs);
};