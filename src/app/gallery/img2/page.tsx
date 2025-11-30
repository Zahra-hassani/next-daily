import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='h-fit w-full flex justify-center flex-col items-center bg-transparent'>
      <div className='w-[70%] flex flex-col text-3xl py-4 items-center font-bold gap-4'>
        <h1>The main page of image 2</h1>
      </div>
      <div className='z-40 bg-black border group'>
        <div className='h-70 w-96 overflow-hidden'>
      <Image height={450} width={650} className='-z-50 transition-all duration-300 group-hover:scale-110' src="/img2.jpg" alt='' />
        </div>
      </div>
    </div>
  )
}

export default page
