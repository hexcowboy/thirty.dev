import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

import CalComLogo from "@/assets/cal-com-logo";
import EternalLogo from "@/assets/eternal-logo";
import InterestedLogo from "@/assets/interested-logo";
import SupDucksLogo from "@/assets/supducks-logo";
import ZeroDevLogo from "@/assets/zerodev-logo";
import Ticker from "@/components/ticker";

const TrustedBy = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [1.2, 0.8],
  });
  const scale_ = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useSpring(scale_, { damping: 10, stiffness: 100 });

  return (
    <motion.div
      className="my-4 flex flex-col items-center gap-8"
      ref={ref}
      transition={{ duration: 0.5 }}
      style={{ scale }}
    >
      <div className="text-2xl text-neutral-500">We contributed to</div>
      <div className="relative w-screen">
        <Ticker duration={7}>
          <Tag link="https://cal.com">
            <CalComLogo className="h-[18px] fill-neutral-500" />
          </Tag>
          <Tag link="https://zerodev.app">
            <ZeroDevLogo className="h-[18px] fill-neutral-500" />
          </Tag>
          <Tag link="https://eternal.gg">
            <EternalLogo className="h-[18px] fill-neutral-500 stroke-neutral-500" />
          </Tag>
          <Tag link="https://www.supducks.com/">
            <SupDucksLogo className="h-[18px] fill-neutral-500" />
          </Tag>
          <Tag link="https://interested.fyi/">
            <InterestedLogo className="h-[18px] fill-neutral-500" />
          </Tag>
        </Ticker>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-white to-transparent dark:from-black" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-white to-transparent dark:from-black" />
      </div>
    </motion.div>
  );
};

interface TagProps {
  children: React.ReactNode;
  link: string;
}
const Tag = ({ children, link }: TagProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-4 flex cursor-pointer items-center gap-2 rounded-2xl bg-neutral-100 px-8 py-3 hover:bg-neutral-200 dark:bg-neutral-900 hover:dark:bg-neutral-900/70"
    >
      {children}
    </Link>
  );
};

export default TrustedBy;
