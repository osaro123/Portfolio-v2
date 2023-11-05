import React from 'react'
import Navbar from '../components/Navbar'
import {HiMail, HiOutlineMail} from "react-icons/hi"
import { BsArrowUpRight, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Connect = () => {
  return (
    <div className="w-[90%] mx-auto max-w-[700px]">
        <Navbar/>
        <motion.div
            initial={{
                opacity: 0,
                y: 100
            }}
            animate={{
                opacity:1,
                y: 0
            }}
            transition={{
                duration: 0.6,
                ease: "easeIn"
            }}
        >
            <div className='my-16 flex items-center justify-center flex-col '>
                <h1 className='text-[30px] font-semibold text-[#1b1b18]'>Osaro Lawani</h1>
                <p className='text-[#706f6c] text-[1rem] max-w-[420px] text-center'>Passionate software engineer 💻 who thrives on crafting exceptional web experiences. 🌐 I love bringing ideas to life with code</p>
            </div>
            <ul className='flex flex-col gap-2'>
                <Link className='p-[1rem] bg-[#f3f3f3] cursor-pointer flex items-center justify-between rounded-md' to="https://www.youtube.com/" target='blank'>
                    <p className='flex items-center gap-2'><HiMail/>Email</p>
                    <BsArrowUpRight/>
                </Link>
                <Link className='p-[1rem] bg-[#f3f3f3] cursor-pointer flex items-center justify-between rounded-md' to="https://github.com/osaro123" target='blank'>
                    <p className='flex items-center gap-2'><BsGithub/>Github</p>
                    <BsArrowUpRight/>
                </Link>
                <Link className='p-[1rem] bg-[#f3f3f3] cursor-pointer flex items-center justify-between rounded-md' to="https://twitter.com/osaro_lawani" target='blank'>
                    <p className='flex items-center gap-2'><BsTwitter/>Twitter</p>
                    <BsArrowUpRight/>
                </Link>
                <Link className='p-[1rem] bg-[#f3f3f3] cursor-pointer flex items-center justify-between rounded-md' to="https://www.linkedin.com/in/osaro-lawani-59958b251/" target='blank'>
                    <p className='flex items-center gap-2'><BsLinkedin/>LinkedIn</p>
                    <BsArrowUpRight/>
                </Link>
            </ul>
        </motion.div>
    </div>
  )
}

export default Connect