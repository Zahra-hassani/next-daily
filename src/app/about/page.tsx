import Image from 'next/image'
import React from 'react'

async function page() {
  await new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Please wait");
        },2000);
    })
  return (
    <div>
      <Image src="/about.jpg" alt='' height={100} width={1300} />
      <h1 className="text-3xl">About us page</h1>
    </div>
  )
}

export default page
