import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks";
import "./App.css";
import { fromJSON } from "postcss";




function App() {
  
  const [amount, setAmount] = useState(0)
  
  const [from , setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo =  useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  // swep to variables

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)

  }

  return <h1 className="text-3xl bg-orange-500"> Currency Converter App</h1>;
}

export default App;
