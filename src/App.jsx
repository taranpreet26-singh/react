
import { useRef, useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const progressBar = useRef(null)
  function addCount(){
    if(count >= 100){
      setCount( 100)

    }else{
      setCount(count + 2)
      progressBar.current.value = count
    }

  }

  const val = (()=>{
    console.log(progressBar.current.value)
  })

  function removeCount(){
    setCount(count - 10)
    progressBar.current.value = count

  }
  return (
    <>
    <div className='flex  flex-col justify-center items-center mt-10'>

      <div className='border-black-4 w-[100%] h-[10%] bg-black  rounded-full overflow-x-hidden '>
        <input type="range" name="range" id="range" className='w-[99%] m-2' ref={progressBar}  onClick={val}/>
      </div>
      <div className='mt-10'>

      <button onClick={addCount} className='w-[20vw] h-[10vh] border-4 bg-red-400'>Add</button>
      <button onClick={removeCount} className='w-[20vw] h-[10vh] border-4 bg-violet-400'>Remove</button>
      </div>
    </div>
    </>
  )
}

export default App
