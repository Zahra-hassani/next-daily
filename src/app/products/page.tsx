"use client";
import Link from "next/link";
function getRandomNumber (num:number){
    return Math.floor(Math.random()* num);
}

export default function page(){
    const randomNumber = getRandomNumber(2);
    if(randomNumber<1){
        throw new Error("Something went wrong");
    }
    return (
        <div className="relative">
            <Link className="font-bold absolute top-4 right-4 p-2 rounded bg-sky-500 text-white" href="/products/allproducts">See all</Link>
            <h1 className="text-center text-3xl font-bold">All our Products</h1>
            <div className="grid grid-cols-3 p-4 gap-5 w-[80%] mx-auto flex-wrap">
                <Link href='/products/order/1' className="bg-linear-to-t from-sky-500 to-sky-300 leading-30 h-30 w-38 rounded text-center font-bold text-white">Product 1</Link>
                <Link href='/products/order/2' className="bg-linear-to-t from-sky-500 to-sky-300 leading-30 h-30 w-38 rounded text-center font-bold text-white">Product 2</Link>
                <Link href='/products/order/3' className="bg-linear-to-t from-sky-500 to-sky-300 leading-30 h-30 w-38 rounded text-center font-bold text-white">Product 3</Link>
                <Link href='/products/order/4' className="bg-linear-to-t from-sky-500 to-sky-300 leading-30 h-30 w-38 rounded text-center font-bold text-white">Product 4</Link>
                <Link href='/products/order/5' className="bg-linear-to-t from-sky-500 to-sky-300 leading-30 h-30 w-38 rounded text-center font-bold text-white">Product 5</Link>
                <Link href='/products/order/6' className="bg-linear-to-t from-sky-500 to-sky-300 leading-30 h-30 w-38 rounded text-center font-bold text-white">Product 6</Link>
            </div>
        </div>
    )
}