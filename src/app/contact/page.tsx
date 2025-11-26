// import Image from 'next/image';
import React from 'react'

async function page() {
  await new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Please wait");
        },2000);
    })
  return (
    <div>
      
      <h1 className="text-3xl">Contact us page</h1>
    </div>
  )
}

export default page
