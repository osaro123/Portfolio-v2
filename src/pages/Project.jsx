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
                        <h1 className='py-6'>Blog App</h1>
                        <ul className='text-[14px] text-[#706f6c]'>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda hic architecto tenetur porro totam eum suscipit dignissimos ipsam tempore cupiditate!</li>
                            <li>Facere veniam molestiae sint porro perspiciatis architecto iste quis pariatur dolores tempore eum quos, sed nam laboriosam harum delectus soluta.</li>
                            <li>Porro eos magni nisi quis sint, voluptatem molestiae saepe repellendus tenetur voluptate dolorum, quisquam, natus amet ad corporis est mollitia?</li>
                            <li>Iste explicabo provident ullam ad culpa nisi? Et, delectus! Laborum asperiores repellat sit debitis neque voluptas nesciunt necessitatibus itaque vero.</li>
                        </ul>
                        <div className='flex gap-2 items-center mt-4'>
                            <Link className='bg-[#1e1e1e] text-white px-4 py-2 rounded-md'>View Live</Link>
                            <Link className='border-[1px] border-[#706f6c] px-4 py-2 rounded-md'>Code</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='py-6'>Chat App</h1>
                        <ul className='text-[14px] text-[#706f6c]'>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda hic architecto tenetur porro totam eum suscipit dignissimos ipsam tempore cupiditate!</li>
                            <li>Facere veniam molestiae sint porro perspiciatis architecto iste quis pariatur dolores tempore eum quos, sed nam laboriosam harum delectus soluta.</li>
                            <li>Porro eos magni nisi quis sint, voluptatem molestiae saepe repellendus tenetur voluptate dolorum, quisquam, natus amet ad corporis est mollitia?</li>
                            <li>Iste explicabo provident ullam ad culpa nisi? Et, delectus! Laborum asperiores repellat sit debitis neque voluptas nesciunt necessitatibus itaque vero.</li>
                        </ul>
                        <div className='flex gap-2 items-center mt-4'>
                            <Link className='bg-[#1e1e1e] text-white px-4 py-2 rounded-md'>View Live</Link>
                            <Link className='border-[1px] border-[#706f6c] px-4 py-2 rounded-md'>Code</Link>
                        </div>
                    </div>
                    <div className='mb-16'>
                        <h1 className='py-6'>Task Management App</h1>
                        <ul className='text-[14px] text-[#706f6c]'>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda hic architecto tenetur porro totam eum suscipit dignissimos ipsam tempore cupiditate!</li>
                            <li>Facere veniam molestiae sint porro perspiciatis architecto iste quis pariatur dolores tempore eum quos, sed nam laboriosam harum delectus soluta.</li>
                            <li>Porro eos magni nisi quis sint, voluptatem molestiae saepe repellendus tenetur voluptate dolorum, quisquam, natus amet ad corporis est mollitia?</li>
                            <li>Iste explicabo provident ullam ad culpa nisi? Et, delectus! Laborum asperiores repellat sit debitis neque voluptas nesciunt necessitatibus itaque vero.</li>
                        </ul>
                        <div className='flex gap-2 items-center mt-4'>
                            <Link className='bg-[#1e1e1e] text-white px-4 py-2 rounded-md'>View Live</Link>
                            <Link className='border-[1px] border-[#706f6c] px-4 py-2 rounded-md'>Code</Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Project