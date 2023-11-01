"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle=()=>{
        setMenuOpen(!menuOpen)

    }
    return (
        <nav className='bg-cyan-500  p-4 shadow-xl'>
           {/* ---------for dektop-------------- */}
           <div className=' z-10 flex justify-between'>
            <div className='w-8'>
            <Link href='/'>
            <Image src="https://document-export.canva.com/PIKNo/DAFy42PIKNo/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231031%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231031T133622Z&X-Amz-Expires=60844&X-Amz-Signature=ea4eb435e462ec979fce9fc3534e8989cad3607c2249735c10d863032116b33f&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2001%20Nov%202023%2006%3A30%3A26%20GMT"
            
            width={207}
            height={70}
            alt='logo'
            >

            </Image>
            
            </Link>
            </div>
            
            <div className='hidden md:flex space-x-2'>
                <Link href='/'>Home</Link>
                <Link href='/products'>Products</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </div>
            <div className='md:hidden' onClick={()=>handleMenuToggle()}>
          {  menuOpen?<AiOutlineClose/>:<AiOutlineMenu/>}

            </div>

           </div>
           {/* -----------------for mobile--------------- */}
           <div >
           {
            menuOpen && 
            <div className='flex flex-col absolute top-16 right-0 p-10 space-y-5 bg-cyan-400 h-60 w-full'>
                 <Link href='/'>Home</Link>
                <Link href='/products'>Products</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </div>
           }

           </div>
           
        </nav>
    );
};

export default Navbar;