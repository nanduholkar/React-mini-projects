import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './components/Button.jsx'

function App() {
  const colors = ["red", "blue", "green", "yellow", "purple", "pink"]
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen">
      
      
      <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
        <h1 className='text-black text-3xl text-center pt-10'>Current Color: {color}</h1>
        <div className="flex gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl fixed bottom-12 inset-x-0 justify-center">
          {colors.map((clr) =>(
            <Button key={clr} color={clr} setColor={setColor}/>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App






