import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='py-8'>Regalos</h1>
      <ul>
        <li className='py-2'>Notebook</li>
        <li className='py-2'>Teclado</li>
        <li className='py-2'>Monitor</li>
        <li className='py-2'>Mouse</li>
        <li className='py-2'>Auriculares</li>
      </ul>
    </div>
  )
}

export default App
