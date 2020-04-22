import axios from "axios";

const api = axios.create({
  baseURL: "https://ga-project3-backend.herokuapp.com/api/",
});

export const getAllItems = async () => {
  const resp = await api.get("/items");
  return resp.data;
};

export const deleteItem = async (id) => {
  const resp = await api.delete(`/cart/${id}`);
  return resp.data;
};

