import { ITask } from "@/types/tasks";
import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

const ToDoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md flex flex-col gap-4">
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </ul>
  );
};

export default ToDoList;
