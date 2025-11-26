"use client";
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';
import React from 'react'

function error({error, reset}:{error:Error, reset:()=>void}) {
    const router = useRouter();
    function handleClick(){
        router.refresh();
        startTransition(()=>{
            reset();
        });
    }
  return (
    <div className='h-screen w-full flex justify-center flex-col items-center gap-3'>
      <h1 className='text-3xl text-center font-bold'>{error.message}, try again once more.</h1>
      <button onClick={handleClick} className='font-bold bg-sky-500 px-6 py-1.5 rounded text-white'>Try again</button>
    </div>
  )
}

export default error
