import React from 'react'
import vid1 from '../assets/vid4.mp4'
import lap from '../assets/lap.png'

const Page3 = () => {
  return (
    <div className='h-screen relative flex items-center justify-center bg-white'> 
    <img className='absolute z-20 h-[120vh] w-[120vh]' src={lap}/>
      <video className='h-[60vh] z-10 w-[80vh] relative   border-2' src={vid1} autoPlay
        loop
        muted
        playsInline />
        <div className='h-0.5 w-[55vw] absolute top-[35%] z-0 bg-black'></div>
         <div className='h-0.5 w-[65vw] top-[45%] absolute z-0 bg-black'></div>
         <div className='h-0.5 w-[80vw] top-[55%] absolute z-0 bg-black'></div>
    </div>
  )
}

export default Page3
