import React from 'react'
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
        <div className='text-xl text-accent font-medium'>Asmarah</div>
        <ul className='gap-10 lg:gap-16 text-accent hidden md:flex'>
            <li className='menulink'><Link href="#hero">Home</Link></li>
            <li className='menulink'><Link href="#about">About</Link></li>
            <li className='menulink'><Link href="#projects">Projects</Link></li>
            <li className='menulink'><Link href="#skills">Skills</Link></li>
            <li className='menulink'><Link href="#contact">Contact</Link></li>
            
        </ul>
        <IoMenu className='md:hidden' size={30} />
            </div> 
      
    </div>
  )
}

export default Navbar
