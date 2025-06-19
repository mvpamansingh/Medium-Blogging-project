import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-200">
        <div className="flex items-center gap-2 mb-4">
          <img src={viteLogo} className="h-24" alt="Vite logo" />
          <img src={reactLogo} className="h-24" alt="React logo" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Vite + React + Tailwind CSS</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is: {count}
        </button>
      </div>
    </>
  )
}

export default App
