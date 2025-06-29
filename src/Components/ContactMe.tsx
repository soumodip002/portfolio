import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactMe() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.section
      id="contact-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full px-4 py-20 text-white bg-transparent max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Let's Work Together</h2>
      <div className="flex flex-col items-center">
        <p className="text-md leading-relaxed mb-6 text-justify max-w-2xl">
          I'm always excited to connect with fellow professionals, potential collaborators, and clients who share a passion for innovative solutions. Whether you have a project in mind, want to discuss opportunities, or simply want to say hello, I'd love to hear from you.
        </p>

        <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
        <ul className="text-md space-y-2 text-justify max-w-2xl">
          <li><strong>Email:</strong> soumadipgc@outlook.com</li>
          <li><strong>Phone:</strong> +91 7602835049</li>
          <li><strong>Location:</strong> Kolkata, India</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-4">Connect With Me</h3>
        <ul className="flex justify-center gap-6 text-xl mb-6">
          <li><a href="https://www.linkedin.com/in/soumadip-ghosh-chowdhury/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin /></a></li>
          <li><a href="https://github.com/soumodip002" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaGithub /></a></li>
          <li><a href="https://x.com/Soumodip_002" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaTwitter /></a></li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">What I'm Looking For</h3>
        <ul className="text-md space-y-2 text-justify max-w-2xl">
          <li>• Full-time positions in Front-end development</li>
          <li>• Speaking engagements and workshop opportunities</li>
          <li>• Collaborative projects and partnerships</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-4">Response Time</h3>
        <p className="text-md text-justify max-w-2xl">
          I typically respond to inquiries within 24-48 hours. For urgent matters, please indicate so in your subject line.
        </p>

        <blockquote className="italic text-center text-lg mt-10 max-w-2xl">"The best way to predict the future is to create it together."</blockquote>
      </div>
    </motion.section>
  );
}
