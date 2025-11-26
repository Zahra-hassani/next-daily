'use Client';
import React, { useState } from 'react'

function input() {
    const [value, setValue] = useState("");
  return (
    <div>
        <input value={value} onChange={(e)=> setValue(e.target.value)} type="search" className="px-2 py-1 border border-white rounded outline-0 w-[30%]" placeholder="Search here" />
    </div>
  )
}

export default input
