import { useState } from 'react'

import './App.css'

function App() {
  let [count , setCount] = useState(5)
  
  if(count > 1){
    count +=1
  }
  setCount(count)

  return (
  <>
  <h1 className='bg-green-400'>Tailwind Css using</h1>
  <h2>{count}</h2>
  </>
  )
}

export default App
