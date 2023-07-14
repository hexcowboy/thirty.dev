import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

import Hero from "@/views/hero";
import Navbar from "@/views/navbar";
import Pricing from "@/views/pricing";
import TrustedBy from "@/views/trusted-by";

const font = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <span className={twMerge("flex flex-col items-center", font.className)}>
      <main className="flex w-full max-w-[1200px] flex-col gap-16 px-8 py-12 sm:px-12">
        <Navbar />
        <Hero />
        <TrustedBy />
        <Pricing />
      </main>
    </span>
  );
}
