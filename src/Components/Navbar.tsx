import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import myLogo from '../assets/peeps-avatar-alpha.png';
import vibeSong from '../assets/background.mp3';

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about-section" },
    { name: "Career", id: "career-section" },
    { name: "Projects", id: "projects-section" },
    { name: "Contact Me", id: "contact-section" }
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={vibeSong} loop preload="auto" />

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] z-50 rounded-3xl bg-white/5 backdrop-blur-lg shadow-2xl px-6 py-4 flex justify-between items-center">
        {/* Left: Play/Pause button + text */}
        <div className="flex items-center gap-3 text-white">
          <motion.button
            onClick={togglePlay}
            whileTap={{ scale: 0.85, rotate: -15 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="bg-white/20 hover:bg-white/30 rounded-full p-2"
          >
            <motion.div
              key={isPlaying ? "pause" : "play"}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
            </motion.div>
          </motion.button>
          <span className="text-xs opacity-70 select-none hidden sm:inline">vibe with me</span>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none">
          <img src={myLogo} alt="Logo" className="h-14 md:h-16 object-contain" />
        </div>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          {menuItems.map((item, i) => (
            <li
              key={i}
              onClick={() => handleScroll(item.id)}
              className="relative group cursor-pointer text-white"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Hamburger (right on mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white bg-white/20 hover:bg-white/30 p-2 rounded-full z-50"
        >
          {isOpen ? <HiX size={20} /> : <HiOutlineMenuAlt3 size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl px-6 py-4 text-white font-medium transform transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 text-center">
          {menuItems.map((item, i) => (
            <li
              key={i}
              onClick={() => handleScroll(item.id)}
              className="relative group cursor-pointer text-white"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
