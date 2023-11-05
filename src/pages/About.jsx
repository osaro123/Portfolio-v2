import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { BsArrowUpRight, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaJs, FaReact } from "react-icons/fa"
import { BiLogoFirebase, BiLogoTailwindCss } from "react-icons/bi"
import { BsGit } from "react-icons/bs"
import { HiMail } from 'react-icons/hi'
import { motion } from 'framer-motion'

const About = () => {
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
                duration: 0.5,
                ease: "easeIn"
            }}
        >
            <div className='py-16'>
                <h1 className='text-[30px] font-semibold text-[#1b1b18]'>About Me</h1>
                <p className='text-[#706f6c] text-[1rem]'>Just a quick glimpse.</p>
            </div>
            <div className='flex sm:flex-row flex-col sm:gap-16 gap-8'>
                <p className='text-[#706f6c]'>About</p>
                <div>
                    <p>Hi, i'm Osaro Lawani</p>
                    <p className='sm:pt-8 pt-4 text-[#706f6c]'>I am Osaro Lawani, currently a student at Babcock University pursuing a Bachelor's degree in Computer Science(Information Systems). With a profound passion for technology, software development, and programming languages, I'm on a perpetual quest to expand my knowledge and refine my skills in these domains. Beyond the realm of code, I also find fascination in problem solving and mathematics, seeing them as complementary to my technical pursuits. Thank you for visiting my portfolio, and I'm eagerly looking forward to sharing my work with you.</p>
                </div>
            </div>

            <div className='flex sm:flex-row flex-col sm:gap-16 gap-8 py-16'>
                <p className='text-[#706f6c]'>Connect</p>
                <div>
                    <p>Have a question or just want to chat? Feel free to email me.</p>
                    <div className='pt-4 grid grid-col-2 gap-4'>
                        <Link className='border-[#ccc] border-[1px] py-4 px-4 flex items-center justify-between rounded-md' to="https://www.youtube.com/" target='blank'>
                            <p className='flex items-center gap-2'><HiMail/>Email</p>
                            <BsArrowUpRight/>
                        </Link>
                        <Link className='border-[#ccc] border-[1px] py-4 px-2 flex items-center justify-between rounded-md' to="https://github.com/osaro123" target='blank'>
                            <p className='flex items-center gap-2'><BsGithub/>Github</p>
                            <BsArrowUpRight/>
                        </Link>
                        <Link className='border-[#ccc] border-[1px] py-4 px-2 flex items-center justify-between rounded-md' to="https://twitter.com/osaro_lawani" target='blank'>
                            <p className='flex items-center gap-2'><BsTwitter/>Twitter</p>
                            <BsArrowUpRight/>
                        </Link>
                        <Link className='border-[#ccc] border-[1px] py-4 px-2 flex items-center justify-between rounded-md' to="https://www.linkedin.com/in/osaro-lawani-59958b251/" target='blank'>
                            <p className='flex items-center gap-2'><BsLinkedin/>LinkedIn</p>
                            <BsArrowUpRight/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col sm:gap-16 gap-8 py-16'>
                <p className='text-[#706f6c]'>Skills</p>
                <div>
                    <p>Technologies i'm familiar with.</p>
                    <div className='py-8 flex flex-wrap gap-8'>
                        <AiFillHtml5 size={80}/>
                        <FaCss3Alt size={80}/>
                        <FaJs size={80}/>
                        <FaReact size={80}/>
                        <BiLogoTailwindCss size={80}/>
                        <BsGit size={80}/>
                        <BiLogoFirebase size={80}/>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default About