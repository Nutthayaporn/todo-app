import { fetchApi } from "../services";

const getTaskApi = () => {
  return fetchApi({
    method: "GET",
    url: "todos",
  });
};

const addTaskApi = ({ title, completed }) => {
  const data = { title, completed };

  return fetchApi({
    method: "POST",
    url: "todos",
    data,
  });
};

const editTaskApi = ({ id, title, completed }) => {
  const data = { id, title, completed };

  return fetchApi({
    method: "PUT",
    url: `todos/${id}`,
    data,
  });
};

const deleteTaskApi = ({ id }) => {
  return fetchApi({
    method: "DELETE",
    url: `todos/${id}`,
  });
};

export { getTaskApi, addTaskApi, editTaskApi, deleteTaskApi };
