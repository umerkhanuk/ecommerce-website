import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import logo from "../logo.png"
export default function Nav() {
  return (
    <>    
    <div className="flex  bg-[#2C3E50] text-white items-center justify-items-center sm:p-2 font-[family-name:var(--font-geist-sans)]">
     <div className='w-1/5'>
     <Image
      src= {logo}
      width={120}
      height={120}
      alt='product image'
      >
      </Image>
     </div>
     <div className='w-4/5 '>
     <ul className="gap-5 text-center text-md">
      <li className="inline-block px-4"><Link href="/">Home</Link></li>
      <li className="inline-block px-4"><Link href="/about">About</Link></li>
      <li className="inline-block px-4"><Link href="/shop">Shop</Link></li>
      <li className="inline-block px-4"><Link href="#">Contact</Link></li>
     </ul>
     </div>
     </div>
     </>

  )
}
