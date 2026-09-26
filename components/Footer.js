"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="w-full top-5 max-w-7xl mx-auto left-0 right-0 px-6">
      {/* <div className=" flex justify-between NAVBAR-INLINE"> */}
      <div className="flex justify-between max-[510px]:flex-col items-center z-10 w-full rounded-3xl py-2 px-3">

        {/* <div className='logo cursor-pointer text-2xl' onClick={() => router.push("/")}>
          <span className='text-[#ff0004]'>{`<`}</span>
          Yash.Dev
          <span className='text-[#ff0004]'>{`/>`}</span>
        </div> */}
        <div className='logo font-extrabold text-[16px] max-[510px]:text-center max-[510px]:text-[13px] cursor-pointer' onClick={() => router.push("/")}>
          {/* <span className='text-[#ff0004]'>{`<`}</span> */}
          <span className='bg-[linear-gradient(90deg,rgba(131,58,180,1)_0%,rgba(255,3,74,1)_0%,rgba(253,29,29,1)_31%,rgba(138,5,255,1)_100%)] bg-clip-text text-transparent'>
            © 2026
            Yash Sharma
            •
            All rights reserved.
          </span>
          {/* <span className='text-[#ff0004]'>{`/>`}</span> */}
        </div>
        <span className='text-[14px] max-[510px]:text-[11px]'>
          Designed & Built by
          Yash Sharma
        </span>
      </div>
    </footer>


  )
}

export default Footer