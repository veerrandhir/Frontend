import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter]=useState(11) // First hook introduced it take a constant value any {}, [],"", num | hold on a variable it has two variable in array [variable, fn()]
  // let counter = 15 | no need of this variable now

  let [removeCounter , setRemoveCounter] = useState(13)
  const addValue = ()=>{
    if(counter >=20) return
    counter = counter +1
    setCounter(counter) // this is a function which changall variables in UI

    console.log("AddValue Clicked : ", counter)
  }
  const removeValue = ()=>{
    if(removeCounter<=0) return
    removeCounter = removeCounter-1
    setRemoveCounter(removeCounter)
  }
 

  return (
    <>
      <h1>Counter Value</h1>
      <h2>Update couner : {counter}</h2>
      <button onClick={addValue}> Add Value {counter}</button>
<br></br>
      <button onClick={removeValue}> Remove Value {removeCounter}</button>
      <p> Footer : {counter}</p>
    </>
  )
}

export default App
