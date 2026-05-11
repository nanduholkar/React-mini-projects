import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ThemeBtn from './components/ThemeBtn.jsx'
import Card from './components/Card.jsx'
import { ThemeProvider } from './context/theme.js'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
  const html = document.documentElement;
  html.classList.remove("light", "dark");
  html.classList.add(themeMode);
}, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className='flex flex-wrap min-h-screen items-center' >
        <div className='w-full' >
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4' >
            <ThemeBtn />
          </div>
          <div className='w-full max-w-sm mx-auto' >
            <Card />
          </div>
        </div>

      </div>
    </ThemeProvider>
  )
}

export default App
