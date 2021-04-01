import api from './api-config';

export const getAllBusinesses = async () => {
  const response = await api.get('/businesses');
  return response.data;
}

export const getOneBusiness = async (id) => {
  const response = await api.get(`/businesses/${id}`);
  return response.data;
}

export const postBusiness = async (businessData) => {
  const response = await api.post('/businesses', { business: businessData });
  return response.data;
}

export const putBusiness = async (id, businessData) => {
  const response = await api.put(`/businesses/${id}`, { business: businessData });
  return response.data;
}

export const destroyBusiness = async (id) => {
  const response = await api.delete(`/businesses/${id}`);
  return response;
}