import { motion } from "framer-motion";

import Footer from "@/views/footer";
import Navbar from "@/views/navbar";
import Pricing from "@/views/pricing";

export default function Page() {
  return (
    <span className="flex flex-col items-center">
      <main className="flex w-full max-w-[1200px] flex-col gap-32 px-8 py-12 sm:px-12">
        <Navbar />
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Pricing />
        </motion.span>
        <Footer />
      </main>
    </span>
  );
}
