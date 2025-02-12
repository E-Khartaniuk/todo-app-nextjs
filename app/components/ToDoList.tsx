import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
  setAllTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const ToDoList: React.FC<TodoListProps> = ({ tasks, setAllTodos }) => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md flex flex-col gap-4">
      {tasks.map((task) => (
        <Task key={task.id} task={task} setAllTodos={setAllTodos} />
      ))}
    </ul>
  );
};

export default ToDoList;
