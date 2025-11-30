import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <Image height={300} width={400} src='/img3.jpg' alt='' />
    </div>
  )
}

export default page
