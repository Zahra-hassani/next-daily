import { HomeIcon, Share2, UserCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='border bg-white text-black shadow rounded-xl p-3 flex justify-center flex-col items-center gap-3'>
      <UserCircle size={50} />
      <h1 className="text-2xl">My Profile</h1>
      <div className="flex justify-between w-full">
        <Link href="/home">
      <HomeIcon size={30} />
      </Link>
      <Share2 size={30} />
      </div>
    </div>
  )
}

export default page
