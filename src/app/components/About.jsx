import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import josh1 from "../images/josh2.webp";

const About = () => {
  return (
    <section
      id="about"
      className="py-12  md:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 min-h-screen w-full flex items-center justify-center"
      style={{ fontFamily: "'Space Mono', monospace" }}
    >
      <div className="w-full max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h1
            className="text-2xl sm:text-3xl md:text-4xl text-[#64FFDA] font-bold mb-4"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            About Me
          </h1>
          <p
            className="text-[#A6ADCD] text-sm sm:text-base md:text-lg leading-relaxed max-w-prose mx-auto lg:mx-0"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            I’m a passionate full‑stack developer who builds responsive, user‑friendly applications.
            I focus on writing clean, efficient code that solves real‑world problems.
            I’m also good at animations and mobile development to expand my skills.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-6 px-5 sm:px-6 py-2 border-2 border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-[#0a192f] transition duration-300 text-sm sm:text-base"
          >
            Download CV
          </a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <Image
            src={josh1}
            alt="Baraka Joshua"
            className="w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96 aspect-square rounded-full border-2 border-[#64FFDA] object-cover shadow-[0_0_15px_rgba(100,255,218,0.5)] hover:shadow-[0_0_25px_rgba(100,255,218,0.8)] transition-shadow duration-300"
            width={384}
            height={384}
          />
        </motion.div>

      </div>
    </div>
    </section>
  );
};

export default About;
