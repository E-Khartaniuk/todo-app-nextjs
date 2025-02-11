import React, { FormEventHandler, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import Modal from "./Modal";
import { addNewTask } from "@/api";
import { ITask } from "@/types/tasks";

const AddTask = ({
  setAllTodos,
}: {
  setAllTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!newTaskValue.trim()) return;

    const newTask = await addNewTask({
      completed: false,
      id: Math.random().toString(),
      title: newTaskValue,
      userId: "1",
    });

    setAllTodos((prevTodos) => [...prevTodos, newTask]);

    setNewTaskValue("");
    setModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
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
              onChange={(e) => setNewTaskValue(e.target.value)}
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
