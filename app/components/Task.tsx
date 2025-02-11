"use client";

import { ITask } from "@/types/tasks";
import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Modal from "./Modal";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <li
      id={task.id}
      className="list-row p-5  flex flex-row  items-center justify-between border bg-slate-50">
      <h3>{task.title}</h3>
      <div>
        {/* <button className="btn btn-square btn-ghost">
          <AiOutlineEdit size={25} />
        </button> */}
        <button className="btn btn-square btn-ghost">
          <AiOutlineDelete size={25} />
        </button>
      </div>
    </li>
  );
};

export default Task;
