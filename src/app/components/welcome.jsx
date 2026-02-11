import { motion } from 'framer-motion';
import React from 'react';

const Welcome = () => {
    const roles = [
        "Mobile apps",
        "Web development",
        "UI/UX",
        "Graphic design"
    ];

    const [text, setText] = React.useState('');
    const [roleIndex, setRoleIndex] = React.useState(0);
    const [charIndex, setCharIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        const currentRole = roles[roleIndex];
        let typeSpeed = isDeleting ? 60 : 120;

        const timeout = setTimeout(() => {
            if (isDeleting) {
                setText(currentRole.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            } else {
                setText(currentRole.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }

            if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => setIsDeleting(true), 1000);
            }

            if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <section id="welcome" className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 min-h-screen w-full flex items-center justify-center" style={{ fontFamily: "'Space Mono', monospace" }}>
            <div className="w-full max-w-6xl">
                <h2 className="text-base sm:text-lg font-medium text-[#64FFDA]">Hi, my name is</h2>

                <motion.h1
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#CCD6F6] mt-4 md:mt-6 break-words"
                >
                    Baraka Joshua
                </motion.h1>

                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#636d8b] mt-4 flex flex-wrap items-center gap-2"
                >
                    I build&nbsp;
                    <span className="relative text-[#64FFDA]">
                        {text}
                        <span className="animate-blink">|</span>
                    </span>
                </motion.h1>

                <div className="mt-6 md:mt-8 max-w-2xl">
                    <motion.p
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-[#636d8b] text-base sm:text-lg md:text-xl leading-relaxed"
                    >
                        Turning ideas into functional, user-friendly web and mobile applications by crafting smart and scalable digital solutions through clean code, intuitive design, and modern technologies.
                    </motion.p>
                </div>

                <motion.button
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-8 md:mt-10 bg-transparent border-2 cursor-pointer border-[#64FFDA] text-[#64FFDA] py-3 px-8 rounded hover:bg-[#64FFDA] hover:text-[#0a192f] transition-colors font-semibold"
                >
                    Let's Connect
                </motion.button>
            </div>

            <style>
                {`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s steps(1) infinite;
                }
            `}
            </style>
        </section>
    );
};

export default Welcome;
