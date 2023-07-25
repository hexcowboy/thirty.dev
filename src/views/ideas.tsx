import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

const springParams = {
  stiffness: 400,
  damping: 90,
};

const Ideas = () => {
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start end", "0.7 0.8"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const offset1_ = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const offset1 = useSpring(offset1_, springParams);
  const offset2_ = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const offset2 = useSpring(offset2_, springParams);
  const offset3_ = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const offset3 = useSpring(offset3_, springParams);
  const offset4_ = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const offset4 = useSpring(offset4_, springParams);

  return (
    <div className="grid w-full gap-12 sm:my-36 sm:grid-cols-2" ref={pageRef}>
      <div className="relative order-last flex min-h-[300px] scale-75 items-center justify-center sm:order-first sm:scale-100">
        <motion.div
          className="absolute rounded-3xl bg-neutral-100 p-8 dark:bg-neutral-900"
          style={{ x: offset1, opacity }}
        >
          <p className="text-3xl font-bold">Dashboards</p>
        </motion.div>
        <motion.div
          className="absolute rounded-3xl bg-neutral-100 p-8 dark:bg-neutral-900"
          style={{ x: offset2, opacity }}
        >
          <p className="text-3xl font-bold">UI Kits</p>
        </motion.div>
        <motion.div
          className="absolute rounded-3xl bg-neutral-100 p-8 dark:bg-neutral-900"
          style={{ y: offset3, opacity }}
        >
          <p className="text-3xl font-bold">Landing Pages</p>
        </motion.div>
        <motion.div
          className="absolute rounded-3xl bg-neutral-100 p-8 dark:bg-neutral-900"
          style={{ y: offset4, opacity }}
        >
          <p className="text-3xl font-bold">AI Chat</p>
        </motion.div>
      </div>

      <span className="flex flex-col items-center gap-3 sm:items-start">
        <h2 className="max-w-[40rem] text-xl font-bold text-green-500 sm:text-2xl">
          Projects
        </h2>
        <h1 className="max-w-[44rem] text-center text-4xl font-bold sm:text-5xl">
          You request, we build
        </h1>
        <p className="mt-2 text-center text-neutral-500 sm:text-left">
          Any frontend task you wish to give us, we&apos;re happy to build it.
        </p>
      </span>
    </div>
  );
};

export default Ideas;
