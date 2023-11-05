import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div 
        className="w-[90%] mx-auto max-w-[700px]"
    >
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
            <Hero/>
        </motion.div>
        <Footer/>
    </div>
  )
}

export default Home