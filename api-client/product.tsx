
import { ProductNew } from "../models/product";
import axiosClient from "./config";

export const getAll = (): Promise<ProductNew> => {
  return axiosClient.get("/products");
};

export const remove = (id: string): Promise<ProductNew> => {
  return axiosClient.delete(`/products/${id}`);
};

export const add = (news: ProductNew): Promise<ProductNew> => {
  return axiosClient.post("/products", news);
};

export const get = (id: string): Promise<ProductNew> => {
  return axiosClient.get(`/products/${id}`);
};
export const update = (news: ProductNew): Promise<ProductNew> => {
  return axiosClient.put(`/products/${news._id}`, news);
};