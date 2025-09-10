import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length , setLenght ] = useState(8)   // declreration of all variable components which generarte code for us
  
  const [numberAllowed , setNumberAllowed]= useState(false)
  
  const [charAllowed, setCharAllowed] = useState(false)

  const [password , setPassword] = useState("") // it require string so given empty string here

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(numberAllowed) str += "1234567890";
    if(charAllowed) str += "!@#$%^&*()"

    // generate random password
    for(let i = 1; i<= array.length ; i++){
      let char = Math.floor(Math.random()* str.lenght +1)
      pass = str.charAt(char)

    }

    setPassword(pass) // pass password generated

  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-29 my-15 text-orange-700 bg-green-600 text-center my-4'> 
          <h1>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4' > <input type= "Text "
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly />
          <button className='text-lg bg-blue-500'>Copy</button>
          
          </div>
          
        </div>
    </>
  )
}

export default App
