"use client";

import React, { FormEventHandler, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import Modal from "./Modal";
import { title } from "process";
import { addNewTask } from "@/api";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskWalue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addNewTask({
      completed: false,
      id: "55",
      title: newTaskValue,
      userId: "676",
    });
    setNewTaskWalue("");
    setModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
        className="btn btn-primary w-full">
        Add new task <CiSquarePlus size={30} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new task!</h3>
          <div className="modal-action">
            <input
              type="text"
              placeholder="Type here"
              onChange={(e) => setNewTaskWalue(e.target.value)}
              value={newTaskValue}
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn">
              Ok
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
