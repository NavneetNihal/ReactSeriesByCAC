import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  console.log("App rendered", Math.random());
  const [value, setValue] = useState({
    value: 0,
  })



  // const [multipliedvalue, setMultipliedvalue] = useState(1)

  // let multipliedvalue = value * 5

  // const multlipliesbyFive = () => {
  //   // setMultipliedvalue(value * 5)
  //   setValue(value + 1)
  // }

  const clickMe = () => {
    setValue(value + 1)
  }


  return (
    <>
    <h1>Main value: {value.value}</h1>
    <button
    onClick={clickMe}
    >Click to multiply by 5</button>
    {/* <h2>Multiplied value: {multipliedvalue} </h2> */}
    </>
  )
}

export default App
