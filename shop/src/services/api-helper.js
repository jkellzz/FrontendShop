import axios from "axios";

const api = axios.create({
  baseURL: "#",
});

export const getAllItems = async () => {
  const resp = await api.get("/");
  return resp.data;
};

export const deleteItem = async (id) => {
  const resp = await api.delete(`/cart/${id}`);
  return resp.data;
};

