import { thunk, action } from "easy-peasy";

import {
  getTaskApi,
  addTaskApi,
  editTaskApi,
  deleteTaskApi,
} from "../services/task";

const initialState = {
  tasks: [],
};

const authModel = {
  ...initialState,
  // action
  setTasks: action((state, payload) => {
    state.tasks = payload;
  }),
  // thunk
  getTasks: thunk(async (actions) => {
    const result = await getTaskApi();
    const data = result.data;

    actions.setTasks(data);
  }),
  addTask: thunk(async (actions, payload) => {
    const { title } = payload;

    await addTaskApi({ title, completed: false });

    actions.getTasks();
  }),
  deleteTask: thunk(async (actions, payload) => {
    const { id } = payload;

    await deleteTaskApi({ id });

    actions.getTasks();
  }),
  editTask: thunk(async (actions, payload) => {
    const { id, title, completed } = payload;

    await editTaskApi({ id, title, completed });

    actions.getTasks();
  }),
};

export default authModel;
