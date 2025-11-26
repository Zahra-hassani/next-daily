import Button from "./Button";



import React from 'react'

async function page({params}:{params:Promise<{orderid:string}>}) {
    const orderid = (await params).orderid;
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Product {orderid}</h1>
      <Button />
    </div>
  )
}

export default page
