import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "স্বাগতম",       // Bengali
  "Welcome",       // English
  "स्वागत है",     // Hindi
  "സ്വാഗതം",      // Malayalam
  "வரவேற்பு",      // Tamil
  "સ્વાગત છે",      // Gujarati
  "స్వాగతం",        // Telugu
  "ಸ್ವಾಗತ",         // Kannada
  "ਆਪ ਦਾ ਸੁਆਗਤ ਹੈ",  // Punjabi
  "নমস্কার",        // Assamese
];

export default function WelcomeScreen({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < greetings.length) {
      const timeout = setTimeout(() => setIndex(index + 1), 2000);
      return () => clearTimeout(timeout);
    } else {
      onFinish(); // After all greetings shown
    }
  }, [index, onFinish]);

  return (
    <AnimatePresence>
      {index < greetings.length && (
        <motion.div
          key={index}
          className="fixed inset-0 bg-black flex items-center justify-center text-4xl md:text-6xl font-bold z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {greetings[index]}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
