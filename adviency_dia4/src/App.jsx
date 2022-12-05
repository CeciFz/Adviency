import React from 'react'
import './App.css'
import GiftsForm from './components/GiftsForm'

function App() {

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold p-4'> 🎅 Lista de Regalos </h1>
      <GiftsForm />
    </div>
  )
}

export default App
