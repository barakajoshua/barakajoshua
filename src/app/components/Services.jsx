import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMagic, FaMobileAlt } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";

const Services = () => {
  const services = [
    {
      title: "Mobile Apps",
      description: "I develop mobile applications for both Android and iOS platforms.",
      image: <FaMobileAlt size={32} />
    },
    {
      title: "Web Development",
      description: "I create responsive and dynamic websites using modern web technologies.",
      image: <FaCode size={32} />
    },
    {
      title: "UI/UX Design",
      description: "I design user-friendly interfaces and experiences for web and mobile applications.",
      image: <FiPenTool size={32} />
    },
    {
      title: "Graphic Design",
      description: "I provide graphic design services for branding, marketing, and more.",
      image: <FaMagic size={32} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <section
        id="services"   
        className="py-12 md:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 min-h-screen w-full flex items-center justify-center"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-lg md:text-xl text-[#CCD6F6] font-bold mb-2">What I Offer</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#64FFDA] font-bold mb-4">
              What I <span className="text-[#64FFDA]">do</span>
            </h1>
          </motion.div>

          <motion.div
            className="w-full flex flex-col sm:flex-col md:flex-row lg:flex-row gap-6 flex-wrap justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-7 rounded-2xl text-[#CCD6F6] space-y-6 border border-[#64FFDA] cursor-pointer w-full sm:w-full md:w-[45%] lg:w-[22%]"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#6fc5b1",
                  color: "#000",
                  borderColor: "#000",
                  transition: { duration: 0.1 }
                }}
              >
                <i>{service.image}</i>
                <h1 className="text-xl font-bold">{service.title}</h1>
                <hr />
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
