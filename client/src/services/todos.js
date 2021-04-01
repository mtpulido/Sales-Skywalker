import api from './api-config';

export const getAllToDos = async () => {
  const response = await api.get('/to_dos');
  return response.data;
}

export const postToDo = async (toDoData) => {
  const response = await api.post('/to_dos', { toDo : toDoData });
  return response.data;
}

export const destroyToDo = async (id) => {
  const response = await api.delete(`/to_do/${id}`);
  return response;
}