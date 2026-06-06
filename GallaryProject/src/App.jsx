import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData = async () => {
    const responce = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(responce.data)
    console.log(responce.data)

    // download_url

  }
  let printUserData = "No user Available"
  if(userData.length > 0){
    printUserData = userData.map((elem, idx) => {
      return(<div key={elem.id} className='mb-4'>
        <img src={elem.download_url} alt={elem.author} className='w-40 h-40 object-cover' alt="" />
      </div>)
    })
  }
  useEffect(() => {
    getData()
  },[index])
  
  return (
    <div className="bg-black min-h-screen text-white">
      <h1>{index}</h1>
      <div className='flex flex-wrap'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center gap-6 p-4'>
        <button 
        className='bg-amber-400 text-black rounded px-4 py-2 font-semibold'
        onClick={() => {
          if(index>1){setIndex(index-1)}
        }}
        >
          Previos
        </button>
        <button 
        className='bg-amber-400 text-black rounded px-4 py-2 font-semibold'
        onClick={() => {
          setIndex(index+1)
        }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
