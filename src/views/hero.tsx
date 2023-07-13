import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Button from "@/components/button";

function isElementAboveViewportBottom(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return rect.bottom <= window.innerHeight;
}

const Hero = () => {
  const animationRef = useRef(null);
  const [isAboveViewportBottom, setIsAboveViewportBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (animationRef.current) {
        setIsAboveViewportBottom(
          isElementAboveViewportBottom(animationRef.current)
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <span className="max-w-screen absolute left-0 top-60 -z-10 h-[800px] h-full w-full overflow-hidden opacity-[13%]">
        <motion.span
          className="absolute left-0 h-full w-[30%] py-20"
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          style={{ originX: 0, originY: 1 }}
        >
          <span className="absolute right-0 top-1/2 h-[800px] w-[800px] -translate-y-1/2 transform rounded-full bg-gradient-radial from-green-600 to-white blur-2xl dark:to-black" />
          <Image src="/hero-left.webp" alt="liquid illustration" fill />
        </motion.span>
        <motion.span
          className="absolute right-0 h-full w-[30%] py-20"
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          style={{ originX: 1, originY: 1 }}
        >
          <span className="absolute left-0 top-1/2 h-[800px] w-[800px] -translate-y-1/2 transform rounded-full bg-gradient-radial from-green-600 to-white blur-2xl dark:to-black" />
          <Image src="/hero-right.webp" alt="liquid illustration" fill />
        </motion.span>
      </span>

      <motion.div
        className="flex min-h-[20rem] flex-col items-center justify-center gap-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="max-w-[40rem] text-4xl font-bold sm:text-5xl">
          On-demand
          <br />
          Frontend Development
        </h1>
        <p className="max-w-[38rem] text-neutral-700 dark:text-neutral-400">
          Build web apps without hiring, firing, or dealing with lazy engineers.
          <br />
          Pay monthly for ⅓ the price of an engineer salary.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button variant="green">Choose Plan</Button>
          <Button variant="secondary" icon={<IconPlayerPlayFilled size={18} />}>
            Watch Video
          </Button>
        </div>
      </motion.div>

      <div style={{ perspective: 800 }} ref={animationRef}>
        <motion.div
          className="flex min-h-[30rem] flex-col items-center justify-center gap-6 rounded-[2rem] border border-neutral-300 p-2 text-center dark:border-neutral-700"
          initial={{ rotateX: 10 }}
          animate={{ rotateX: isAboveViewportBottom ? 0 : 10 }}
        >
          <div className="flex w-full grow rounded-[2rem] bg-white/20 p-8 backdrop-blur-lg dark:bg-black/20">
            hey there
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
