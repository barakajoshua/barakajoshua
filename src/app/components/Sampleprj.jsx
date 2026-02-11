"use client"
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';
import { useState,useEffect } from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';
import AddTestmony from "./addtestmonial";
import coffee from "../images/coffee.jpeg"
import dashboard from "../images/dashboard.webp"
import taskmgt from "../images/taskmgt.jpeg"
import { div } from 'framer-motion/client';
const Testimonials = () => {
    let myProjects = [
        {
            id:1,
            title:"Coffee Shop",
            image:coffee,
            description:"A coffee shop website which shows  the menu, location, and contact information.",
            tools:"React, Tailwind CSS"
        },
        {
            id:2,
            title:"Dashboard",
            image:dashboard,
            description:"A responsive admin dashboard with charts and user management features.",
            tools:"Next.js, Tailwind CSS"
        },
        {
            id:3,
            title:"Task Management",
            image:taskmgt,
            description:"A task management application with tracking progress features and  well designed UI.",
            tools:"Flutter, SQLite"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };
    return(
        <>
        <section id="projects" className='py-12 md:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 w-full flex items-center justify-center min-h-auto' style={{ fontFamily: "'Space Mono', monospace" }}>
            <div className='w-full max-w-6xl'>
                <motion.div 
                    className='text-center mb-12 md:mb-16'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-lg md:text-xl text-[#CCD6F6] font-bold mb-2">Portfolio</h1>
                    <h2 className='text-4xl sm:text-5xl md:text-6xl mb-6 font-bold text-[#64FFDA]'>Sample <span className='text-[#64FFDA]'>Projects</span></h2>
                    <p className='text-[#CCD6F6] text-base md:text-lg max-w-3xl mx-auto'>Here are some recent project samples which showcase my passion for web and mobile development and UI/UX design.</p>
                </motion.div>
                <motion.div 
                    className='w-full flex items-center justify-center flex-nowrap gap-6 overflow-x-auto pb-4'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >  
                {myProjects.map((index)=>(
                    <motion.div 
                        key={index.id} 
                        className='flex-shrink-0'
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        <motion.div 
                            className='w-80 h-96 bg-[#112240] rounded-lg shadow-lg overflow-hidden border border-[#64FFDA]/20 hover:border-[#64FFDA] transition-all duration-300'
                            whileHover={{
                                boxShadow: "0 0 30px rgba(100, 255, 218, 0.3)",
                                scale: 1.05,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <motion.div 
                                className='w-full h-1/2 overflow-hidden'
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Image 
                                    src={index.image} 
                                    alt={index.title} 
                                    className='w-full h-full object-cover'
                                    width={320}
                                    height={192}
                                />
                            </motion.div>
                            <div className='p-6 h-1/2 flex flex-col justify-between'>
                                <div>
                                    <h3 className='text-xl font-bold text-[#64FFDA] mb-2'>{index.title}</h3>
                                    <p className='text-[#A6ADCD] text-sm leading-relaxed'>{index.description}</p>
                                </div>
                                <motion.p 
                                    className='text-xs font-bold text-[#64FFDA] mt-2'
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                >
                                    Tools: {index.tools}
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}

                </motion.div>
            </div>

        </section>
        </>
    )
    
}

export default Testimonials;