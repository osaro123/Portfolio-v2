import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <div className='my-16'>
            <h1 className='text-[30px] font-semibold text-[#1b1b18]'>Osaro Lawani</h1>
            <p className='text-[#706f6c] text-[1rem]'>Web Developer</p>
        </div>
        <p className='max-w-[500px] text-[#1b1b18] text-[1rem]'>I'm Osaro Lawani, a web developer proficient in React.js, with a strong focus on building dynamic and interactive web applications. As a 300-level student at Babcock University, studying Computer Science with a specialization in Information Systems, I am deeply passionate about frontend development and also possess versatile backend capabilities.</p>
        <div className='py-8 sm:flex flex-col gap-8'>
            <Link className='flex gap-2 items-center text-[#706f6c]'><BsArrowUpRight/>Email</Link>
            <Link to="/links" className='flex gap-2 items-center text-[#706f6c]'><BsArrowUpRight/>Connect with me</Link>
            <Link className='flex gap-2 items-center text-[#706f6c]'><BsArrowUpRight/>Resume</Link>
        </div>
    </div>
  )
}

export default Hero