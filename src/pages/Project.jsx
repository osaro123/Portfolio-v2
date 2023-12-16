import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Project = () => {
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
            <div className='py-16'>
                <h1 className='text-[30px] font-semibold text-[#1b1b18]'>Projects</h1>
                <p className='text-[#706f6c] text-[1rem]'>A few selected projects.</p>
            </div>
            <div className='flex sm:flex-row flex-col sm:gap-16 gap-8'>
                <p className='text-[#706f6c]'>Projects</p>
                <div>
                    <p>I enjoy exploring my interests through projects</p>
                    <div>
                        <h1 className='py-6'>Movie App</h1>
                        <ul className='text-[14px] text-[#706f6c]'>
                            <li>Vast Movie Database: Explore an extensive collection of films across genres and eras, from classics to the latest releases.</li>
                            <li>Comprehensive Insights: Dive deep into movie details, including synopses, ratings, cast info, trailers, and more.</li>
                            <li>Effortless Exploration: Robust search options and filters for easy navigation and finding your next movie obsession.</li>
                        </ul>
                        <div className='flex gap-2 items-center mt-4'>
                            <Link to="https://stage-two-tau.vercel.app/" target='blank' className='bg-[#1e1e1e] text-white px-4 py-2 rounded-md'>View Live</Link>
                            <Link to="https://github.com/osaro123/stage-two" target='blank' className='border-[1px] border-[#706f6c] px-4 py-2 rounded-md'>Code</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='py-6'>Hoobank landing page</h1>
                        <ul className='text-[14px] text-[#706f6c]'>
                            <p>Welcome to Hoobank Landing Page, a captivating project crafted with React and Tailwind CSS! This dynamic landing page exemplifies sleek design fused with intuitive user experience. With placeholder content that emphasizes modern banking solutions, Hoobank Landing Page showcases seamless navigation and interactive elements. Although the project is a placeholder, its purpose is to highlight design prowess and attention to detail in creating an engaging digital presence. Stay tuned for future developments as this page evolves into a comprehensive platform for innovative financial solutions.</p>
                        </ul>
                        <div className='flex gap-2 items-center mt-4'>
                            <Link to="https://modern-bank-website-osaro123.vercel.app/" target='blank' className='bg-[#1e1e1e] text-white px-4 py-2 rounded-md'>View Live</Link>
                            <Link to="https://github.com/osaro123/modern_bank_website" target='blank' className='border-[1px] border-[#706f6c] px-4 py-2 rounded-md'>Code</Link>
                        </div>
                    </div>
                    <div className='mb-16'>
                        <h1 className='py-6'>My Portfolio website</h1>
                        <ul className='text-[14px] text-[#706f6c]'>
                            <p>Explore My Portfolio Website, a testament to my creativity and technical finesse, meticulously developed with React and Tailwind CSS. This platform is more than a digital canvas—it's a reflection of my journey, skills, and dedication. Dive into a world of innovation and captivating design as you navigate through placeholder content that hints at the vision behind this evolving project. My Portfolio Website embodies my commitment to crafting user-centric experiences, combining aesthetics with functionality. Stay tuned for the unveiling of my portfolio’s evolution, showcasing my latest works, achievements, and expertise.</p>
                        </ul>
                        <div className='flex gap-2 items-center mt-4'>
                            <Link to="https://portfolio-v2-osaro123.vercel.app/" target='blank' className='bg-[#1e1e1e] text-white px-4 py-2 rounded-md'>View Live</Link>
                            <Link to="https://github.com/osaro123/Portfolio-v2" target='blank' className='border-[1px] border-[#706f6c] px-4 py-2 rounded-md'>Code</Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Project