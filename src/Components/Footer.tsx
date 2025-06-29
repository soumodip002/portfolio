import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import signature from "../assets/signature.png";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hrs = now.getHours();
      const mins = now.getMinutes().toString().padStart(2, "0");
      const secs = now.getSeconds().toString().padStart(2, "0");
      const ampm = hrs >= 12 ? "PM" : "AM";
      hrs = hrs % 12 || 12;
      const formattedHrs = hrs.toString().padStart(2, "0");
      setTime(`${formattedHrs}:${mins}:${secs} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full py-6 px-4 border-t border-white/10 text-white text-sm bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">

        {/* Left: Local Time */}
        <div className="flex items-center gap-2 order-1">
          <p className="tracking-widest text-xs">
            LOCAL TIME <span className="ml-2 font-mono font-bold">{time}</span>
          </p>
        </div>

        {/* Center: Signature & Copyright */}
        <div className="flex flex-col items-center justify-center order-2 -mt-2">
          <img
            src={signature}
            alt="signature"
            className="h-[80px] w-auto object-contain opacity-90"
          />
          <p className="opacity-60 text-xs text-center mt-1">
            © {new Date().getFullYear()} Soumadip Ghosh Chowdhury. All rights reserved.
          </p>
        </div>

        {/* Right: Built with */}
        <div className="flex items-center gap-2 text-xs order-3">
          <p className="opacity-60">Built with</p>
          <FaReact className="text-cyan-400 text-base" />
          <span className="text-xs">and</span>
          <SiTailwindcss className="text-blue-300 text-base" />
        </div>
      </div>
    </footer>
  );
}
