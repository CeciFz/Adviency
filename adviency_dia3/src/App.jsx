import { useState } from 'react'
import './App.css'
import FormRegalos from '../src/components/FormRegalos'

function App() {

  return (
    <div className='flex flex-col justify-center'>
        <h1 className='text-4xl dark:text-white font-bold p-4'>Lista de Regalos</h1>
        <FormRegalos/>
    </div>
  )
}

export default App
