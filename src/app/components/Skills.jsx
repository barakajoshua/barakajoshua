import { FaReact, FaNodeJs, FaPython, FaPhp, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiLaravel, SiFigma, SiFlutter, SiMysql, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        { name: "React", icon: <FaReact />, hoverColor: "#61DAFB" },
        { name: "Node.js", icon: <FaNodeJs />, hoverColor: "#68A063" },
        { name: "Python", icon: <FaPython />, hoverColor: "#3776AB" },
        { name: "PHP", icon: <FaPhp />, hoverColor: "#777BB4" },
        { name: "HTML5", icon: <FaHtml5 />, hoverColor: "#E34C26" },
        { name: "CSS3", icon: <FaCss3Alt />, hoverColor: "#1572B6" },
        { name: "MongoDB", icon: <SiMongodb />, hoverColor: "#13AA52" },
        { name: "Express.js", icon: <SiExpress />, hoverColor: "#90C53F" },
        { name: "Laravel", icon: <SiLaravel />, hoverColor: "#FF2D20" },
        { name: "Figma", icon: <SiFigma />, hoverColor: "#F24E1E" },
        { name: "Flutter", icon: <SiFlutter />, hoverColor: "#02569B" },
        { name: "MySQL", icon: <SiMysql />, hoverColor: "#00758F" },
        { name: "JavaScript", icon: <SiJavascript />, hoverColor: "#F7DF1E" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <>
            <section id="skills" className="py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 min-h-screen w-full flex items-center justify-center" style={{ fontFamily: "'Space Mono', monospace" }}>
                <div className="w-full max-w-6xl">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-lg md:text-xl text-[#CCD6F6] font-bold mb-2">My Expertise</h2>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#64FFDA] mb-4">
                            Skills & <span className="text-[#64FFDA]">Technologies</span>
                        </h1>
                        <p className="text-[#A6ADCD] text-base md:text-lg max-w-2xl mx-auto">
                            A collection of technologies and tools I've mastered to build exceptional digital solutions
                        </p>
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {skills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                className="group relative cursor-pointer flex items-center gap-2 border border-[#A6ADCD] px-4 sm:px-5 py-2 sm:py-3 rounded-full overflow-hidden backdrop-blur-sm hover:border-[#64FFDA] transition-colors duration-300"
                                whileHover={{
                                    scale: 1.08,
                                    y: -5,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                {/* Icon with color transition */}
                                <motion.span
                                    className="text-xl sm:text-2xl transition-colors duration-300"
                                    style={{ color: "#A6ADCD" }}
                                    whileHover={{ color: skill.hoverColor }}
                                >
                                    {skill.icon}
                                </motion.span>

                                {/* Text with color transition */}
                                <motion.span
                                    className="text-sm sm:text-base font-medium transition-colors duration-300 text-[#A6ADCD] group-hover:font-semibold"
                                    whileHover={{ color: skill.hoverColor }}
                                >
                                    {skill.name}
                                </motion.span>

                                {/* Subtle glow effect on hover */}
                                <div
                                    className="absolute -inset-1 opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300 -z-20 rounded-full"
                                    style={{ background: skill.hoverColor }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Skills;