import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

const Ideas = () => {
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: [1.2, 0.8],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const offset1_ = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const offset1 = useSpring(offset1_,{ stiffness: 400, damping: 90 });
  const offset2_ = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const offset2 = useSpring(offset2_,{ stiffness: 400, damping: 90 });
  const offset3_ = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const offset3 = useSpring(offset3_,{ stiffness: 400, damping: 90 });
  const offset4_ = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const offset4 = useSpring(offset4_,{ stiffness: 400, damping: 90 });

  return (
    <div
      className="sm:my-40 grid w-full flex-col items-center gap-12 sm:grid-cols-2"
      ref={pageRef}
    >
      <div className="relative flex items-center justify-center sm:scale-100 scale-75 min-h-[300px]">
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
          <p className="text-3xl font-bold">Forms</p>
        </motion.div>
      </div>

      <span className="flex flex-col items-center gap-3 sm:items-start">
        <h2 className="max-w-[40rem] text-xl font-bold text-green-500 sm:text-2xl">
          Projects
        </h2>
        <h1 className="max-w-[44rem] text-center text-4xl font-bold sm:text-5xl">
          We love building
        </h1>
        <p className="mt-2 text-neutral-500">
          Any frontend task you wish to give us, we&apos;re happy to build it.
        </p>
      </span>
    </div>
  );
};

export default Ideas;