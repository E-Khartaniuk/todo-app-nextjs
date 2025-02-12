import React, { FormEventHandler, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import Modal from "./Modal";
import { addNewTask } from "@/api";
import { ITask } from "@/types/tasks";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({
  setAllTodos,
}: {
  setAllTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const [addNewTaskError, setAddNewTaskError] = useState<boolean>(false);

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!newTaskValue.trim()) {
      setAddNewTaskError(true);
      return;
    }

    if (newTaskValue.trim()) {
      setAddNewTaskError(false);

      const tempId = uuidv4();
      const tempTask: ITask = {
        completed: false,
        id: tempId,
        title: newTaskValue,
        userId: "1",
      };

      console.log("Adding a task:", tempTask);
      setAllTodos((prevTodos) => [...prevTodos, tempTask]);

      setNewTaskValue("");
      setModalOpen(false);

      try {
        const newTask = await addNewTask(tempTask);
        console.log("The server returned the task:", newTask);
      } catch (error) {
        console.error("Edd task error:", error);

        setAllTodos((prevTodos) =>
          prevTodos.filter((task) => task.id !== tempId)
        );
      }
    }
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
              placeholder={
                addNewTaskError ? "This field cannot be empty." : "Type here"
              }
              onChange={(e) => {
                setNewTaskValue(e.target.value);
                setAddNewTaskError(false);
              }}
              value={newTaskValue}
              className={`input input-bordered w-full ${
                addNewTaskError ? "border-red-500" : "border-gray-300"
              }`}
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
