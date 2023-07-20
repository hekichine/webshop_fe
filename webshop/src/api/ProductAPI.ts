import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params: any) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
  get: (id: string) => {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
};
export default productApi;
