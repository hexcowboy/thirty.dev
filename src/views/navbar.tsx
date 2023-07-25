import Link from "next/link";

import Icon from "@/assets/icon";
import Button from "@/components/button";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:gap-0">
      <span className="flex flex-1">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Icon className="w-12 border-b border-green-500 fill-black dark:fill-white" />
          </div>
        </Link>
      </span>
      <div className="relative hidden grow justify-center gap-8 text-neutral-600 dark:text-neutral-400 sm:flex">
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
      </div>
      <span className="flex flex-1 justify-end">
        <Link href="/dashboard">
          <Button className="hidden sm:block">Dashboard</Button>
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
