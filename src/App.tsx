import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Index from "./Components/Index";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import CareerPage from "./Components/CareerPage";
import ProjectsSection from "./Components/ProjectsSection";
import Socials from "./Components/Socials";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import { FaArrowUp } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import AnimatedCursor from "react-animated-cursor";
import clickSound from "./assets/click.mp3";

const greetings = [
  "Welcome",
  "স্বাগতম",
  "स्वागत है",
  "வரவேற்பு",
  "સ્વાગત છે",
  "స్వాగతం",
  "സ്വാഗതം",
  "ಸ್ವಾಗತ",
  "ସ୍ୱାଗତ",
  "स्वागतम्",
  "ਨਮਸਕਾਰ",
  "নমস্কাৰ",
  "வணக்கம்",
  "ನಮಸ್ಕಾರ"
];

function App() {
  const [showGreetings, setShowGreetings] = useState(true);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Greeting animation
  useEffect(() => {
    const totalTime = 2000;
    const intervalTime = totalTime / greetings.length;
    const interval = setInterval(() => {
      setCurrentGreetingIndex((prev) => {
        if (prev < greetings.length - 1) return prev + 1;
        clearInterval(interval);
        setTimeout(() => setShowGreetings(false), 600);
        return prev;
      });
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  // Scroll button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      setShowScrollDown(window.scrollY < window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect mobile device
  useEffect(() => {
    setIsMobile(window.innerWidth < 768); // md breakpoint
  }, []);

  // 🔊 Sound effect on click or touch
  useEffect(() => {
    const audio = new Audio(clickSound);
    audio.volume = 0.5;

    const playSound = () => {
      audio.currentTime = 0;
      audio.play();
    };

    window.addEventListener("click", playSound);
    window.addEventListener("touchstart", playSound);
    return () => {
      window.removeEventListener("click", playSound);
      window.removeEventListener("touchstart", playSound);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ✅ Custom Cursor - only on non-mobile */}
      {!isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={30}
          color="255, 255, 255"
          outerAlpha={0.2}
          innerScale={1}
          outerScale={2.5}
          clickables={["a", "button", ".cursor-pointer", "[role='button']", "input", "textarea"]}
        />
      )}

      <AnimatePresence>
        {showGreetings && (
          <motion.div
            key="greetings"
            className="w-full h-screen flex items-center justify-center text-white bg-black text-4xl md:text-6xl font-bold text-center fixed inset-0 z-50"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.span
              key={currentGreetingIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {greetings[currentGreetingIndex]}
            </motion.span>
            <Index
              particleCount={150}
              particleSpread={6}
              speed={0.2}
              moveParticlesOnHover={true}
              particleHoverFactor={1.1}
              alphaParticles={true}
              particleBaseSize={80}
              sizeRandomness={1}
              cameraDistance={20}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!showGreetings && (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full min-h-screen overflow-hidden text-white"
          >
            <div id="home" className="absolute top-0" />

            <Index
              particleCount={200}
              particleSpread={8}
              speed={0.2}
              moveParticlesOnHover={true}
              particleHoverFactor={1.2}
              alphaParticles={true}
              particleBaseSize={100}
              sizeRandomness={1}
              cameraDistance={20}
            />

            <Socials />

            <div className="relative z-10">
              <Navbar />
              <Hero />
              {showScrollDown && (
                <motion.div
                  className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-40 text-white flex flex-col items-center cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  onClick={() => scrollTo("about-section")}
                >
                  <BsMouse className="text-3xl animate-bounce" />
                  <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Scroll down
                  </span>
                </motion.div>
              )}
              <AboutMe />
              <CareerPage />
              <ProjectsSection />
              <ContactMe />
              <Footer />
            </div>

            <AnimatePresence>
              {showBackToTop && (
                <motion.button
                  className="fixed bottom-6 right-6 z-40 text-white hover:scale-110 transition-transform flex flex-col items-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => scrollTo("home")}
                >
                  <FaArrowUp className="text-2xl" />
                  <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Back to top
                  </span>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
