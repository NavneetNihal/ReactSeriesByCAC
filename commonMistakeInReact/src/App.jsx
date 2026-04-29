import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(0)

  return (
    <>
    <div style={{padding: '2rem'}}>
      <h1>Welcome to chai and code</h1>
      <button
      onClick={() => setIsLoggedIn(!isLoggedIn)}
      >Toggle login</button>

    
    <div>
      <h3>&& operator</h3>
      {!!isLoggedIn && <p>Welcome to chaicode video</p>}
    </div>

     <div>
      <h3>Ternary operator</h3>
      {isLoggedIn ? <p>Welcome to chaicode video</p>: "Please Login"}
    </div>


   </div>
    </>
  )
}

export default App
