// import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProvider> // Now whatever component we have direct access through it
    <h1>Mini project</h1>
    </UserContextProvider>)
}

export default App
