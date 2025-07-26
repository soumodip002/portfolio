import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    SiNextdotjs,
    SiReact,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiBootstrap,
    SiTailwindcss,
    SiMui,
    SiPython,
    SiC,
    SiRedux,
    SiGit,
    SiGithub,
    SiVercel,
    SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";

const techStack = [
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiReact, name: "React.js" },
    { icon: SiHtml5, name: "HTML" },
    { icon: SiCss3, name: "CSS" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiBootstrap, name: "Bootstrap" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiMui, name: "Material UI" },
    { icon: SiPython, name: "Python" },
    { icon: SiC, name: "C" },
    { icon: SiRedux, name: "Redux" },
    { icon: SiGit, name: "Git" },
    { icon: SiGithub, name: "GitHub" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiVercel, name: "Vercel" },
    { icon: SiVite, name: "Vite" },
    { icon: VscVscode, name: "VS Code" },
];

export default function CareerPage() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <section
            id="career-section"
            ref={ref}
            className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-32 text-white bg-transparent"
        >
            {/* Timeline */}
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full max-w-4xl flex flex-col items-center relative"
            >
                {/* Timeline Line */}
                <div className="absolute w-1 bg-white h-full left-1/2 transform -translate-x-1/2"></div>

                {/* 10th */}
                <div className="w-full flex justify-start mb-16 relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                    <div className="ml-[calc(var(--spacing,1px)*50)] sm:ml-[calc(var(--spacing,1px)*40)] max-w-xs text-white">
                        <h3 className="font-bold text-lg">10th</h3>
                        <p className="text-sm">Gopalnagar K.K. Institution</p>
                        <p className="text-sm">Passout: 2015</p>
                    </div>
                </div>

                {/* Diploma */}
                <div className="w-full flex justify-end mb-16 relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="mr-[calc(var(--spacing,1px)*50)] max-w-xs text-right text-white">
                        <h3 className="font-bold text-lg">Diploma</h3>
                        <p className="text-sm relative lg:left-3">Netaji Subhash Engineering College</p>
                        <p className="text-sm">Passout: 2018</p>
                    </div>
                </div>


                {/* B.Tech*/}
                <div className="w-full flex justify-start mb-16 relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="ml-[calc(var(--spacing,1px)*50)] sm:ml-[calc(var(--spacing,1px)*40)] max-w-xs text-white">
                        <h3 className="font-bold text-lg">B.Tech</h3>
                        <p className="text-sm">College of Engineering & Management, Kolaghat</p>
                        <p className="text-sm">Passout: 2024</p>
                    </div>
                </div>

                {/* Work Experience*/}
                <div className="w-full flex justify-center relative mt-20">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>

                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center text-white max-w-sm">
                        <h3 className="font-bold text-lg">ObjectSol Technologies</h3>
                        <p className="text-sm">React Developer</p>
                        <p className="text-sm">July 2025 – Present</p>
                    </div>
                </div>
            </motion.div>

            {/* Tech Stack Section */}
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full mt-44 sm:mt-32"
            >
                <h2 className="text-3xl font-bold text-center mb-10">My Tech Stack</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center items-center">
                    {techStack.map((tech, index) => {
                        const isHovered = hoveredIndex === index;
                        const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className={`group relative text-center transition-all duration-500 ease-in-out hover:z-10 ${isDimmed ? "blur-sm opacity-30" : "opacity-100 blur-0"
                                    } ${isHovered ? "scale-110" : ""}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onTouchStart={() => setHoveredIndex(index)}
                                onTouchEnd={() => setHoveredIndex(null)}
                            >
                                <tech.icon className="text-4xl sm:text-5xl mx-auto transition-transform duration-500 ease-in-out group-hover:scale-125" />
                                <span
                                    className={`absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 text-sm text-white transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    {tech.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
