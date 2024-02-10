import { useEffect, useState } from 'react'
import offer_img from './assets/offer.png'
const Offer = () => {

  const duration = 5 * 24 * 60 * 60 * 1000

  const[time,setTime]=useState(duration)

  useEffect(()=>{
    setTimeout(()=>{
      setTime(time- 1000)

    },1000)

  },[time])

  const getFormattedTime =(time)=>{

    const totalSeconds = parseInt(Math.floor(time / 1000))
    const totalMinutes = parseInt(Math.floor(totalSeconds / 60))
    const totalHours = parseInt(Math.floor(totalMinutes / 60))
    const totalDays = parseInt(Math.floor(totalHours / 24))

    const seconds = parseInt(totalSeconds % 60)
    const minutes = parseInt(totalMinutes % 60)
    const hours = parseInt(totalHours % 24)

    return `${totalDays}d : ${hours}h : ${minutes}m : ${seconds}s`


  }


  return (
    <section className='px-8 flex justify-between bg-yellow rounded-3xl items-center h-80 overflow-hidden my-8 md:px-1 md:h-60 sm:grid sm:p-5 sm:h-auto sm:place-content-center'>
        <div className='ml-10 sm:m-auto sm:flex sm:flex-col sm:items-center'>
            <h1 className=' font-extrabold md:text-2xl sm:text-xl'>Winter offer</h1>
            <h2 className='font-medium text-4xl my-3 md:text-3xl sm:text-2xl'>{getFormattedTime(time)}</h2>
            <button className='text-black font-medium bg-white py-2 px-5 rounded-3xl mt-5'>
              {" "}
              Open Store{" "}
            </button>
        </div>
        <img className='w-2/3 bottom-8 relative md:w-1/2 sm:hidden' src={offer_img} alt="" />
    </section>
  )
}

export default Offer