import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Landing } from '../screens/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing />
    </>
  )
}

export default App
