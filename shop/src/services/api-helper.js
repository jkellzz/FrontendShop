import axios from "axios";

const api = axios.create({
  baseURL: "https://ga-project3-backend.herokuapp.com/api/",
});

export const getAllItems = async () => {
  const resp = await api.get("/items");
  return resp.data;
};

export const deleteItem = async (id) => {
  const resp = await api.delete(`/items/${id}`);
  return resp.data;
};

export const updateReviews = async (id, reviews) => {
  console.log('id, reviews', id)
  console.log('reviews', reviews)
  const resp = await api.put(`/reviews/${id}`, reviews);
  return resp.data;
};
export const createItem = async (item) => {
  const resp = await api.post('/items', item)
  return resp.data
}

export const getAllReviews = async () => {
  const resp = await api.get("/reviews");
  return resp.data;
};
