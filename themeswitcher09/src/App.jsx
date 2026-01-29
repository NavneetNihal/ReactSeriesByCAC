import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/card'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  // Notes -
 //  Serial NO - 3  if the global object has the info in memory that it is lighTheme than we are running a function which set or update themeMode by setThemeMode method and store this "light" as string inside themeMode.

  const lightTheme = () => {
    setThemeMode("light")
  }
//  Serial NO - 4 same happens with darkTheme if global object has memory that it is darkTheme then thia method runs and it store "dark" as string in themeMode.
  const darkTheme = () => {
    setThemeMode("dark")
  }
  // Actual change in theme

 // Serial NO - 5  Meanwhile useEffect runs and clear the html doesn't matter it is light or dark it just clears it so we can set the theme coz if we dont clear it and themeMode sets it as dark or it has already light class then it will clash.

  useEffect(() => {
    const htmlClasslist = document.querySelector('html').classList;
    htmlClasslist.remove("light", "dark");
    
    //  Serial NO - 6 and lastly it adds whatever is in global object. so the color change one more thing it also has one dependency.
    htmlClasslist.add(themeMode);
  }, [themeMode]);


  return (
    //  Serial NO - 2 By giving the value={{ themeMode, lightTheme, darkTheme }} We are telling the app.jsx use this info to write the logic which is just above in line no 9.
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
