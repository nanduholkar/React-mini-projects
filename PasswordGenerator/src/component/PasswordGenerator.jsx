import { useState, useEffect } from 'react'



function PasswordGenerator(){
      
      const [password, setPassword] = useState("")
      const [length, setLength] = useState(15)
      const [uppercase, setUppercase] = useState(true)
      const [lowercase, setLowercase] = useState(true)
      const [numbers, setNumbers] = useState(true)
      const [symbols, setSymbols] = useState(true)
      const [errors, setErrors] = useState(true)
      

      const CopyToClipboard = () => {
        navigator.clipboard.writeText(password)
        alert("Copied!")
      }

      const generatePassword = () =>{
        let chars = ""
        if(lowercase){
            chars += "abcdefghijklmnopqrstuvwxyz"
        }

        if(uppercase){
            chars += "ABCDEFIJKLMNOPQRSTUVWXYZ"
        }
        
        if(numbers){
            chars += "0123456789"
        }

        if(symbols){
            chars += "!@#$%^&*()"
        }

        let pass = ""
        
        if(chars === ""){
            alert("Select at least one option")
            return
        }
        for(let i = 0; i<length; i++){
            let randomIndex = Math.floor(Math.random()*chars.length)
            pass += chars[randomIndex]
        }
        setPassword(pass)
        
      }
    return (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-[350px] text-white">
      
      <h2 className="text-xl font-semibold text-center mb-4">
        Password Generator
      </h2>

      <input
        type="text"
        value={password}
        placeholder="Your Password"
        readOnly
        className="w-full p-2 rounded-lg bg-gray-700 text-white outline-none mb-3"
      />
      <button 
        onClick={CopyToClipboard}
        className='mt-2 w-full bg-green-500 hover: bg-green-600 p-2 rounded-1g'
      >
        Copy Password
    </button>t

      <button
        onClick={generatePassword}
        className="w-full bg-blue-500 hover:bg-blue-600 transition p-2 rounded-lg"
      >
        Generate Password
      </button>

      <div className="mt-4">
        <p className="text-sm mb-1">Length: {length}</p>

        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
        <label className='flex items-center gap-2 mt-3' >
            <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
        Uppercase</label>

        <label className='flex items-center gap-2 mt-3' >
            <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)} />
        Lowercase</label>

        <label className='flex items-center gap-2 mt-3' >
            <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
        Numbers</label>


        <label className='flex items-center gap-2 mt-3' >
            <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} />
        Symbols</label>

        

        


      </div>

    </div>

  </div>
);
        

}

export default PasswordGenerator