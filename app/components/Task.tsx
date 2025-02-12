"use client";

import { ITask } from "@/types/tasks";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Modal from "./Modal";
import { deleteTask } from "@/api";

interface TaskProps {
  task: ITask;
  setAllTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
  tasks: ITask[];
}

const Task: React.FC<TaskProps> = ({ task, setAllTodos, tasks }) => {
  const [modalDeleteOpen, setModalDeleteOpen] = useState<boolean>(false);

  const handleDeleteTask = async (id: string) => {
    const previousTodos = tasks;

    setAllTodos((prevTodos) => prevTodos.filter((task) => task.id !== id));

    try {
      await deleteTask(id);
    } catch (error) {
      console.error("Delete error:", error);
      setAllTodos(previousTodos);
    }
  };

  const handleDeleteTaskReject = () => {
    setModalDeleteOpen(false);
  };

  return (
    <li
      key={task.id}
      className="list-row p-5  flex flex-row  items-center justify-between border bg-slate-50">
      <h3>{task.title}</h3>
      <div>
        <button
          onClick={() => {
            setModalDeleteOpen(true);
          }}
          className="btn btn-square btn-ghost">
          <AiOutlineDelete size={25} />
        </button>

        <Modal modalOpen={modalDeleteOpen} setModalOpen={setModalDeleteOpen}>
          <h3 className="font-bold text-lg">Delete?</h3>
          <div className="modal-action">
            <button
              onClick={() => {
                handleDeleteTaskReject();
              }}
              className="btn">
              Cancel
            </button>
            <button
              onClick={() => {
                handleDeleteTask(task.id);
              }}
              className="btn">
              Yes
            </button>
          </div>
        </Modal>
      </div>
    </li>
  );
};

export default Task;
