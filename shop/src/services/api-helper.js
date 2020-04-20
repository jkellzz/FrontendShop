import axios from "axios";

const api = axios.create({
  baseURL: "#",
});

export const getAllItems = async () => {
  const resp = await api.get("/");
  return resp.data;
};
