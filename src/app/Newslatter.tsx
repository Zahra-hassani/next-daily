'use client';
import React, { useState } from 'react'

function Newslatter() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    return (
    <div className='grid grid-cols-1 md:grid-cols-2 my-5 w-full h-fit p-5 bg-white/30 text-white'>
      <div className="flex justify-center flex-col gap-3 p-4">
        <h1 className='text-3xl font-bold'>Special order delivery</h1>
        <p>Get your order until November 26<sup>th</sup> with our special order delivery.</p>
      </div>
      <div className="w-full p-4">
        <form className='flex justify-center flex-col items-center gap-3'>
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" className="px-2 py-1 border border-white rounded outline-0 w-[80%]"  placeholder='Your name'/>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="px-2 py-1 border border-white rounded outline-0 w-[80%]" placeholder='Email' />
            <button className='px-7 py-2 bg-white font-bold rounded-xl hover:scale-105 text-black transition-all duration-300'>Order Now</button>
        </form>
      </div>
    </div>
  )
}

export default Newslatter
