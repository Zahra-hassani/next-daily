"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

function Button() {
    const router = useRouter();
    function handleClick(){
        // button logic
        router.push('/')
    }
  return (
    <div>
      <button onClick={handleClick} className='font-bold text-xl bg-sky-500 text-white px-6 py-2 rounded'>Order Now</button>
    </div>
  )
}

export default Button
