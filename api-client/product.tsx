import instance from "./instance";

export const list = () => {
  const url = `/products`;
  return instance.get(url);
};
export const add = (product) => {
  const url = `/products`;
  return instance.post(url, product);
};
export const read = (id: number) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
export const remove = (id: number|string) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};