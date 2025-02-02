import React from 'react'
import notFound from "../../assets/notFound.svg"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center'>
      <img className='w-[72rem] ml-32 h-[35rem] mt-10' src={notFound} alt="" />
     <Link to="/">  <button className='bg-[#158B68] mt-5 w-[13rem] h-[3.6rem] my-[-3rem] rounded-xl text-[#E8F2F8] text-2xl text-bold'> بازگشت به خانه</button></Link>
    </div>
  )
}

export { NotFound }
