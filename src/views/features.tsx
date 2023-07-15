import { IconBrandGit, IconBrandReact } from "@tabler/icons-react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="flex w-full flex-col items-center gap-12">
      <span className="flex flex-col items-center gap-3">
        <h2 className="max-w-[40rem] text-xl font-bold text-green-500 sm:text-2xl">
          Features
        </h2>
        <h1 className="max-w-[44rem] text-center text-4xl font-bold sm:text-5xl">
          Launch <em>fast</em>
        </h1>
        <p className="mt-2 text-neutral-500">
          We&apos;re talking days, not months
        </p>
      </span>

      <motion.div
        className="grid w-full gap-8 sm:grid-cols-2"
        ref={ref}
        animate={isInView ? { y: 0, scale: 1 } : { y: 20, scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="grid h-[400px] rounded-3xl bg-neutral-100 p-8 dark:bg-neutral-900 sm:col-span-2 sm:grid-cols-2">
          <span className="relative m-12 sm:order-last">
            <Image src="/torus.webp" alt="Torus" fill />
          </span>
          <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
            <h4 className="max-w-[40rem] text-xl font-bold text-green-500 sm:text-2xl">
              Task Queue
            </h4>
            <h4 className="text-2xl font-bold sm:text-4xl">
              Don&apos;t change your workflow
            </h4>
            <p className="text-neutral-500">
              We work just like any other proficient team. Drop some tasks in
              our queue and we&apos;ll get them done according to your priority.
              We make progress on your tasks every workday.
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-neutral-100 p-8 dark:bg-neutral-900">
          <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
            <IconBrandReact size={40} />
            <h4 className="max-w-[40rem] text-xl font-bold text-green-500 sm:text-2xl">
              High Quality
            </h4>
            <h4 className="text-2xl font-bold sm:text-4xl">
              Get code that lasts
            </h4>
            <p className="text-neutral-500">
              We deliver code using TypeScript and React. We use design systems
              that every senior engineer will vouch for. Everything is mobile
              and desktop responsive.
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-neutral-100 p-8 dark:bg-neutral-900">
          <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
            <IconBrandGit size={40} />
            <h4 className="max-w-[40rem] text-xl font-bold text-green-500 sm:text-2xl">
              Ownership
            </h4>
            <h4 className="text-2xl font-bold sm:text-4xl">
              It&apos;s all yours, forever
            </h4>
            <p className="text-neutral-500">
              We&apos;ll give you private access to the Github repo so you can
              always own and modify what&apos;s rightfully yours.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
