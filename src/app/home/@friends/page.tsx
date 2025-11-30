import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='border bg-white text-black rounded-xl p-3 flex flex-col items-center gap-3'>
        <p className="text-4xl px-3 py-4 rounded-full border">🧑‍🤝‍🧑</p>
      <h1 className='text-2xl'>Your Friends</h1>
      <Link className='border p-3 rounded-md hover:bg-gray-300 hover:shadow' href="home/allfriends">See All Friends</Link>
    </div>
  )
}

export default page
