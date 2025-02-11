import { ITask } from "./types/tasks"

const baseURL = ' https://jsonplaceholder.typicode.com/todos'

export const getAllTodos = async (): Promise<ITask[]>=>{
    const res = await fetch(`${baseURL}/?_limit=10`, {cache: 'no-store'})
    const todos = await res.json()
    return todos
}

export const addNewTask = async (todo: ITask): Promise<ITask>=>{
    const res = await fetch(`${baseURL}`,{ 
        method:'POST', 
        headers: {'Content-Type': 'application/json'}, body: JSON.stringify(todo)},
        
    )
    const newTodo = await res.json()
    return newTodo
}