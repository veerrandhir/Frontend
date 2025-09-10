import { useState } from 'react'
import './App.css'

function App() {
  const [length , setLenght ] = useState(8)   // declreration of all variable components which generarte code for us
  
  const [numberAllowed , setNumberAllowed]= useState(false)
  
  const [charAllowed, setCharAllowed] = useState(false)

  const [password , setPassword] = useState("") // it require string so given empty string here


  return (
    <>
        <h1 className="text-center  text-4xl text-white bg-green-500" >
      Password Generator
    </h1>
    </>
  )
}

export default App
