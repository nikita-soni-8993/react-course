import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'

function App() {

  return (
    <div className="bg-gray-700 p-10 justify-center text-center">
      <AddTodo />
      <TodoItem />
    </div>
  )
}

export default App
