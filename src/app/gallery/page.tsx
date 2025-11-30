
// import Image from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <h1 className='font-bold text-3xl text-center'>Gallery</h1>
            {/* <h1>Image list</h1> */}
        <div className='grid grid-cols-3 w-[80%] mx-auto'>
      <Link href='/gallery/img1' className='p-5 rounded'><Image src="/img1.jpg" alt='img1' height={140} width={140} className='rounded' /></Link>
      <Link href='/gallery/img2' className='p-5 rounded'><Image src="/img2.jpg" alt='img2' height={140} width={140} className='rounded' /></Link>
      <Link href='/gallery/img3' className='p-5 rounded'><Image src="/img3.jpg" alt='img3' height={140} width={140} className='rounded' /></Link>
      {/* <Link href=''><Image height={140} width={200} className='rounded' src="/img2.jpg" alt=''/></Link> */}
      {/* <Link href=''><Image height={140} width={200} className='rounded' src="/img3.jpg" alt=''/></Link> */}
      </div>
    </div>
  )
}

export default page
