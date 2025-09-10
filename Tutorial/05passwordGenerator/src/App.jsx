import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length , setLenght ] = useState(8)   // declreration of all variable components which generarte code for us
  
  const [numberAllowed , setNumberAllowed]= useState(false)
  
  const [charAllowed, setCharAllowed] = useState(false)

  const [password , setPassword] = useState("") // it require string so given empty string here

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let <strong></strong> = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(numberAllowed) str += "1234567890";
    if(charAllowed) str += "!@#$%^&*()"

    // generate random password
    for(let i = 1; i<= array.length ; i++){
      let char = Math.floor(Math.random()* str.lenght +1)
      pass = str.charAt(char)
      
    }
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
        <h1 className="text-center  text-4xl text-white bg-green-500" >
      Password Generator
    </h1>
    </>
  )
}

export default App
