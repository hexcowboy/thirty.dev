import { lazy } from "react";

import Hero from "@/views/hero";

const FAQ = lazy(() => import("@/views/faq"));
const Features = lazy(() => import("@/views/features"));
const Footer = lazy(() => import("@/views/footer"));
const Ideas = lazy(() => import("@/views/ideas"));
const Navbar = lazy(() => import("@/views/navbar"));
const Pricing = lazy(() => import("@/views/pricing"));
const TrustedBy = lazy(() => import("@/views/trusted-by"));

export default function Home() {
  return (
    <span className="flex flex-col items-center">
      <main className="flex w-full max-w-[1200px] flex-col gap-32 px-8 py-12 sm:px-12">
        <Navbar />
        <Hero />
        <TrustedBy />
        <Features />
        <Ideas />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </span>
  );
}
