import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiDownload } from "react-icons/fi";
import profileImg from "../assets/hero.png";
import resume from '../assets/resume.pdf';

export default function AboutMe() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animateDownload, setAnimateDownload] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const handleDownload = () => {
    setAnimateDownload(true);
    setTimeout(() => setAnimateDownload(false), 500); // reset after animation
  };

  return (
    <section
      ref={ref}
      id="about-section"
      className="relative z-10 w-full flex justify-center px-4 sm:px-6 md:px-10 pt-20 pb-32 min-h-screen bg-transparent"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-6xl text-white flex flex-col md:flex-row items-center gap-10"
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 border-b border-white inline-block pb-1">
            Hi there
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-justify mb-6">
            Hi, I'm Soumadip Ghosh Chowdhury 👋 — a front-end developer with a passion for turning ideas into elegant, user-centric digital experiences. With a strong foundation in software engineering and an eye for design, I build responsive interfaces that are as functional as they are beautiful. Constantly exploring, always evolving — I'm here to create, collaborate, and bring fresh ideas to life.
            <br />
            <strong>Let’s build something remarkable together.</strong>
          </p>

          {/* Download Resume Button */}
          <a
            href={resume}
            download
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/90 text-[#0d0d0d] font-medium rounded-full hover:bg-gray-300 transition-colorsinline-flex items-center gap-2 px-5 py-2 bg-white text-[#0d0d0d] font-semibold rounded-full hover:bg-gray-200 transition-all shadow-md"
          >
            Download Resume
            <motion.span
              animate={animateDownload ? { y: [0, 5, 0] } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <FiDownload size={18} />
            </motion.span>
          </a>
        </div>

        <div className="relative flex-1">
          <img
            src={profileImg}
            alt="Soumadip"
            className="w-full h-auto max-h-[500px] rounded-lg shadow-lg object-contain"
          />

          <div
            className="absolute top-0 h-full flex items-center writing-vertical text-white text-4xl font-bold font-noto tracking-wide animate-fade-in right-[10px] md:right-[90px]"
            style={{ pointerEvents: "none" }}
          >
            ソウマディップ
          </div>
        </div>
      </motion.div>
    </section>
  );
}
