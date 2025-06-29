import SplitText from "./SplitText";

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 text-white text-center relative z-10">
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-10 flex flex-col gap-4">
        <SplitText
          text="Hi, I'm Soumadip"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin leading-snug text-[#ffffff]"
          delay={50}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <SplitText
          text="Crafting bold ideas into pixel-perfect realities."
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-thin text-[#ffffff]"
          delay={50}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
    </section>
  );
}
