import Link from 'next/link';
import React from 'react'

async function page({searchParams}:{searchParams:Promise<{page?:string}>}) {
    const products:{id:number,name:string}[] = Array.from({length:60},(_,index)=>({
        id: index+1,
        name: `Product ${index+1}`
    }));

    
    const pageNumber= (await searchParams).page || 1;
    const itemsPerPage  = 9;
    const start = (Number(pageNumber) - 1)*itemsPerPage;
    const end = start + itemsPerPage;
    
    const items = products.slice(start,end);
    const currentPage = Number(pageNumber);
    const totalPage = Math.ceil(products.length/itemsPerPage);

    const pages:{id:number,number:number}[] = Array.from({length:totalPage},(_,i)=>({
      id: i+1,
      number: i+1
    }))

    let showP = currentPage >1?true:false;
    let showN = currentPage < totalPage?true:false;
    return (
    <div>
        <div className='grid grid-cols-3 gap-3.5 w-[80%] mx-auto p-4'>
      {
        items.map((product) =>(
            <h1 key={product.id} className='font-bold p-5 bg-linear-to-t from-sky-600 to-sky-300 text-center text-2xl rounded text-white'>{product.name}</h1>
        ))
      }
      </div>
      <p className="text-xl">Page {currentPage} of {totalPage}</p>
      <div className='flex justify-between gap-5 w-[50%] mx-auto p-4'>
        {showP && <Link className='font-bold px-5 py-2.5 rounded bg-sky-500 text-white hover:bg-white hover:text-sky-500' href={`?page=${currentPage-1}`}>Previous</Link>}
        {pages.map((item)=>(
          <Link className='px-5 py-3 text-center rounded-full bg-sky-500 text-white hover:bg-white hover:text-sky-500' key={item.id} href={`allproducts?page=${item.number}`}>{item.number}</Link>
        ))}
        {showN && <Link className='font-bold px-5 py-2.5 rounded bg-sky-500 text-white hover:bg-white hover:text-sky-500' href={`?page=${currentPage+1}`}>Next</Link>}
      </div>
    </div>
  )
}

export default page
