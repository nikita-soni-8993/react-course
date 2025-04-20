
import './App.css'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { TodoProvider } from './Context/TodoContext'
import { Key, useEffect, useState } from 'react'

const  App = () =>{

  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]")
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

   const addTodo = (todo:any) => {
    console.log(todo)
    setTodos((prev:any) =>  [ {...todo}, ...prev])
   }

  const deleteTodo = (id:any ) => {
    setTodos((prev:any)=> prev.filter((todo:any)=> todo.id != id))
  }

  const updateTodo = (id:any,todo:any) => {
    setTodos((prev:any)=> prev.map((prevTodo:any)=>((prevTodo.id == id)? todo : prevTodo)))
  }

  const toggleTodo = (id:any)=>{
      setTodos((prev:any)=> prev.map((prevTodo:any)=> prevTodo.id == id ? {...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

 
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
              {todos.map((todo:any) => (
                  <div key={todo.id}
                  className='w-full'
                  >
                    <TodoItem todo={todo} />
                  </div>
                ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
