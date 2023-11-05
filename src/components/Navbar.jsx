import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import {BsMoonFill, BsSunFill} from "react-icons/bs"
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [darkTheme,setDarkTheme] = useState(false)
    const [ isOpen,setIsOpen ] = useState(false)
  return (
    <nav className={`flex items-center justify-between py-6 w-full`}>
        <Link to="/" className='text-xl font-bold text-[#1b1b18]'>OL</Link>
        <div className='sm:flex items-center gap-8 hidden'>
            <NavLink to="/" className='text-[#706f6c] text-sm'>Home</NavLink>
            <NavLink to="/about" className='text-[#706f6c] text-sm'>About</NavLink>
            <NavLink to="/projects" className='text-[#706f6c] text-sm'>Projects</NavLink>
            <NavLink to="/links" className='text-[#706f6c] text-sm'>Connect</NavLink>
        </div>
        <div className='flex items-center gap-4'>
            <div className='sm:hidden'>
                <p 
                    className='flex items-center text-[#706f6c] text-[1rem]'
                    onClick={() => {
                        setIsOpen(!isOpen)
                    }}
                >Menu<BiPlus/></p>
                <motion.div
                    initial={{
                        x: 100
                    }}
                    animate={{
                        x:0
                    }}
                    className={`${isOpen ? 'flex' : 'hidden'} flex-col items-center gap-2 absolute right-[1rem] mt-4 bg-white shadow-2xl px-2 py-4 rounded-md`}>
                    <NavLink to="/" className='text-[#706f6c] text-sm'>Home</NavLink>
                    <NavLink to="/about" className='text-[#706f6c] text-sm'>About</NavLink>
                    <NavLink to="/projects" className='text-[#706f6c] text-sm'>Projects</NavLink>
                    <NavLink to="/links" className='text-[#706f6c] text-sm'>Connect</NavLink>
                </motion.div>
            </div>
            {darkTheme ? 
                <BsSunFill 
                    size={18} 
                    color='#706f6c' 
                    className='cursor-pointer'
                    onClick={() => setDarkTheme(!darkTheme)}/>
                :
                <BsMoonFill
                    size={18} 
                    color='#706f6c' 
                    className='cursor-pointer'
                    onClick={() => setDarkTheme(!darkTheme)}
                />
            }
        </div>
    </nav>
  )
}

export default Navbar