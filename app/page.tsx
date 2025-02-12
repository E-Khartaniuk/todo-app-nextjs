"use client";

import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";
import { useEffect, useState } from "react";
import { ITask } from "@/types/tasks";

export default function Home() {
  const [allTodos, setAllTodos] = useState<ITask[]>([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const tasks = await getAllTodos();
      setAllTodos(tasks);
    };

    fetchTodos();
  }, []);

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-5">
        <h1 className="text-center text-3xl font-bold">Todo List</h1>
      </div>
      <AddTask setAllTodos={setAllTodos} />
      <ToDoList tasks={allTodos} setAllTodos={setAllTodos} />
    </main>
  );
}
