//import { useState } from 'react'
import './App.css'
import Card from'./components/Card';
import Colorchanger from './components/Colorchanger';
import PasswordGenerator from './components/PasswordGenerator';

function App() {

  return (
    <>
      <h1 className='bg-green-400 rounded-xl text-black p-4 mb-4' >Hello React!</h1>
      <div className='flex bg-blue-300 px-2 py-2'>
        <Card price="5" text="This is first card" />
        <Card price="15"  text="This is second card" />
      </div>
      <Colorchanger/>
      <PasswordGenerator/>
    </>
  )
}

export default App
