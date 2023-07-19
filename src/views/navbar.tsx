import { IconLasso } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Inconsolata } from "next/font/google";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import Button from "@/components/button";

const font = Inconsolata({
  weight: "500",
  subsets: ["latin"],
});

type Props = {};

const Navbar = ({}: Props) => {
  return (
    <motion.nav
      className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:gap-0"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link href="/" className="flex-1">
        <div className="flex items-center gap-2">
          <IconLasso size={28} />
          <span className={twMerge("ml-2 text-2xl", font.className)}>Spur</span>
        </div>
      </Link>
      <div className="relative hidden grow justify-center gap-4 text-neutral-600 dark:text-neutral-400 sm:flex">
        <span className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] w-screen -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-radial from-green-600/10 to-white blur-2xl dark:to-black" />
        <span>Features</span>
        <span>Pricing</span>
      </div>
      <span className="flex flex-1 justify-end">
        <Button className="hidden sm:block">Dashboard</Button>
      </span>
    </motion.nav>
  );
};

export default Navbar;
