import { Session } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import Link from "next/link";

import Icon from "@/assets/icon";
import Button from "@/components/button";
import User from "@/components/user";

interface Props {
  user?: Session["user"] | null;
  animate?: boolean;
  isDashboard?: boolean;
}

const Navbar = ({ user = null, animate, isDashboard = false }: Props) => {
  return (
    <motion.nav
      className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:gap-0"
      initial={animate ? { opacity: 0, y: -20 } : undefined}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5 }}
    >
      <span className="flex flex-1">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Icon className="w-12 border-b border-green-500 fill-black dark:fill-white" />
          </div>
        </Link>
      </span>
      {isDashboard ? (
        !!user && <User user={user} />
      ) : (
        <>
          <div className="relative hidden grow justify-center gap-8 text-neutral-600 dark:text-neutral-400 sm:flex">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <span className="flex flex-1 justify-end">
            <Link href="/dashboard">
              <Button className="hidden sm:block">Dashboard</Button>
            </Link>
          </span>
        </>
      )}
    </motion.nav>
  );
};

export default Navbar;
