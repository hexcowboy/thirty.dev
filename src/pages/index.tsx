import FAQ from "@/views/faq";
import Features from "@/views/features";
import Footer from "@/views/footer";
import Hero from "@/views/hero";
import Ideas from "@/views/ideas";
import Navbar from "@/views/navbar";
import Pricing from "@/views/pricing";
import TrustedBy from "@/views/trusted-by";

export default function Home() {
  return (
    <span className="flex flex-col items-center">
      <main className="flex w-full max-w-[1200px] flex-col gap-32 px-8 py-12 sm:px-12">
        <Navbar animate />
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
