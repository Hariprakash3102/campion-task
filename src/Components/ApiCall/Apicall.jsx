import axiosInstance from "../AxiosInstance/AxiosInstance";

export const getApi = () => {
  return axiosInstance.get("/");
};

export const postApi = (values) => {
  return axiosInstance.post("/", values);
};

export const putApi = (id, info) => {
  return axiosInstance.put(`/${id}`, info);
};

export const deleteApi = (id) => {
  return axiosInstance.delete(`/${id}`);
};

export const getidApi = (id) => {
  return axiosInstance.get(`/${id}`);
};
