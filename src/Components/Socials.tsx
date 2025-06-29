import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Socials() {
  const [showMobileIcons, setShowMobileIcons] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setShowMobileIcons(rect.top > window.innerHeight * 0.2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };

  const links = [
    { href: "https://github.com/soumodip002", icon: <FaGithub size={20} />, hover: "hover:text-cyan-400" },
    { href: "https://www.instagram.com/soumadip_bittu/?hl=en", icon: <FaInstagram size={20} />, hover: "hover:text-pink-400" },
    { href: "https://x.com/Soumodip_002", icon: <FaTwitter size={20} />, hover: "hover:text-blue-400" },
    { href: "https://www.linkedin.com/in/soumadip-ghosh-chowdhury/", icon: <FaLinkedin size={20} />, hover: "hover:text-blue-300" },
  ];

  return (
    <>
      {/* Desktop & Tablet */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed left-4 bottom-6 z-50 hidden sm:flex flex-col items-center gap-5"
      >
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white transition duration-300 ${link.hover}`}
          >
            {link.icon}
          </a>
        ))}
        <div className="w-px h-16 bg-white opacity-30 mt-2"></div>
      </motion.div>

      {/* Mobile - animate on scroll */}
      <AnimatePresence>
        {showMobileIcons && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={iconVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed left-4 bottom-6 z-50 flex flex-col items-center gap-5 sm:hidden"
          >
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white transition duration-300 ${link.hover}`}
              >
                {link.icon}
              </a>
            ))}
            <div className="w-px h-16 bg-white opacity-30 mt-2"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
