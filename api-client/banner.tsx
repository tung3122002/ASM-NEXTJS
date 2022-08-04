import { Banner } from "../models/banner";

import instance from "./instance";

export const list = () => {
  const url = `/banners`;
  return instance.get(url);
};
export const add = (banner :Banner) => {
  const url = `/banners`;
  return instance.post(url, banner);
};
export const read = (id: number) => {
  const url = `/banners/${id}`;
  return instance.get(url);
};
export const remove = (id: number|string) => {
  const url = `/banners/${id}`;
  return instance.delete(url);
};
export const update = (banner: Banner) => {
  const url = `/banners/${banner._id}`;
  return instance.put(url, banner);
};