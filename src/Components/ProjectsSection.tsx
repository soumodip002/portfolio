import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Portfolio from "../assets/portfolio.png";
import Quiz from "../assets/quiz-app.png";
import Game from "../assets/game.png";
import OldPort from "../assets/old-portfolio.png";

const projects = [
  {
    title: "Portfolio Website",
    image: Portfolio,
    tech: ["React", "TailwindCSS", "TypeScript"],
    github: "https://github.com/soumodip002/portfolio",
    live: "https://soumadip-portfolio.web.app/",
  },
  {
    title: "Quiz App",
    image: Quiz,
    tech: ["React", "OpenTDB API", "TypeScript"],
    github: "https://github.com/soumodip002/Brain-Challenge",
    live: "https://brain-challenge.vercel.app/",
  },
  {
    title: "Tic Tac Toe",
    image: Game,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/soumodip002/Tic-Tac-Toe",
    live: "https://tictachub.netlify.app/",
  },
  {
    title: "Old Portfolio",
    image: OldPort,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/soumodip002/my-portfolio",
    live: "https://soumadip-portfolio.vercel.app/",
  },
];

export default function ProjectsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.section
      id="projects-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full px-4 py-20 text-white bg-transparent"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Some Things I’ve Built</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden"
          >
            {/* macOS-style header */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-white/20 px-2 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white flex items-center gap-1 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  <FaGithub className="inline text-base" /> GitHub Repo
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white flex items-center gap-1 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Live <FaExternalLinkAlt className="inline text-xs" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
