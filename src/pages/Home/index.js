import { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import { TodoItem, Select, TodoInput } from "../../components";

export default function Home() {
  const [filterTask, setFilterTask] = useState(null);

  const getTasksAction = useStoreActions((action) => action.task.getTasks);
  const addTaskAction = useStoreActions((action) => action.task.addTask);
  const editTaskAction = useStoreActions((action) => action.task.editTask);
  const deleteTaskAction = useStoreActions((action) => action.task.deleteTask);

  const tasks = useStoreState((state) => state.task.tasks);

  useEffect(() => {
    getTasksAction();
  }, []);

  let displayTasks = tasks;
  if (filterTask === "done") {
    displayTasks = displayTasks.filter((task) => task.completed);
  } else if (filterTask === "undone") {
    displayTasks = displayTasks.filter((task) => !task.completed);
  }

  return (
    <div className="home-page">
      <div className="content">
        <div className="title-bar">
          <p className="title">Tasks</p>
          <div className="select-wrapper">
            <Select
              defaultValue="all"
              items={[
                { title: "All", value: "all" },
                { title: "Done", value: "done" },
                { title: "Undone", value: "undone" },
              ]}
              onChange={(value) => setFilterTask(value)}
            />
          </div>
        </div>
        <div className="tasks-wrapper">
          {displayTasks.map((task) => {
            const id = task?.id;
            const title = task?.title;
            const completed = task?.completed;
            return (
              <div key={id} className="task-item">
                <TodoItem
                  title={title}
                  checked={completed}
                  onToggleCompleted={(value) =>
                    editTaskAction({ id, title, completed: value })
                  }
                  onEdit={(value) =>
                    editTaskAction({ id, title: value, completed })
                  }
                  onDelete={() => deleteTaskAction({ id })}
                />
              </div>
            );
          })}
        </div>
        <div className="task-input-wrapper">
          <TodoInput onSubmit={(text) => addTaskAction({ title: text })} />
        </div>
      </div>
    </div>
  );
}
