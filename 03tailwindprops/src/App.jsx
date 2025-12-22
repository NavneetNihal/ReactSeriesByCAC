import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Nihal",
    age: 25,
  } 
  let newArr = [1,2,3]

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
        <Card username="Nihal" someObj={newArr} btnText="click me"/>
        <Card username="Genius" />

      </div>
    </>
  )
}

export default App
