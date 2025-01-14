import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

function About() {
  return (
    <motion.div 
    variants={fadeIn('left',0.1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}
    className="container mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-shadow -text-shadow-x-lg text-shadow-y-lg text-shadow-blur-10 text-shadow-violet-600 mb-4">We are Ramkrishna Enterprise</h2>
    <p className="text-lg md:text-xl text-gray-700 mb-8">
      Your trusted advertisement agency, providing creative and innovative solutions since 1999.
    </p>
    <div className="max-w-2xl mx-auto">
      <p className="text-gray-600 text-base md:text-lg mb-6">
        At Ramkrishna Enterprise, we specialize in creating captivating and effective advertising campaigns that help our
        clients grow their brands and connect with their audience. With over two decades of experience, we
        bring a wealth of knowledge and expertise to every project we take on. Our passion for storytelling and
        innovative strategies ensures that we deliver impactful results every time.
      </p>
      <p className="text-gray-600 text-base md:text-lg">
        From TV commercials and digital advertising to event marketing and creative content production, we are
        committed to providing top-notch services that leave a lasting impression.
      </p>
    </div>
  </motion.div>
  )
}

export default About