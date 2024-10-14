import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Landing } from '../screens/Landing'
import Routes from '../routes'
import { RouterProvider } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={Routes} />
    </>
  )
}

export default App
