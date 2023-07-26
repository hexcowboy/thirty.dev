import { IconCheck } from "@tabler/icons-react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";

import { Badge } from "@/components/badge";
import Button from "@/components/button";
import { Switch } from "@/components/switch";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isYearlyPayment, setIsYearlyPayment] = useState(true);

  const standardPrice = isYearlyPayment ? 6000 : 7000;
  const proPrice = isYearlyPayment ? 9000 : 10000;

  return (
    <div className="flex w-full flex-col items-center gap-12">
      <span className="flex flex-col items-center gap-3">
        <h2 className="relative max-w-[40rem] text-xl font-bold text-green-500 sm:text-2xl">
          <span className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] w-screen -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-radial from-green-600/10 to-white blur-2xl dark:to-black" />
          Pricing
        </h2>
        <h1 className="max-w-[44rem] text-center text-4xl font-bold sm:text-5xl">
          Don&apos;t pay another salary
        </h1>
        <p className="mt-2 text-center text-neutral-500">
          Pre-pay for dev work and pause any time you&apos;re not using it.
        </p>
      </span>

      <div className="flex items-center justify-center gap-4 self-center rounded-3xl border border-neutral-300 px-6 py-4 dark:border-neutral-700">
        <Switch defaultChecked onCheckedChange={setIsYearlyPayment} />
        <span className="text-lg">
          <strong>Pay Yearly</strong> and save an extra $1,000/mo
        </span>
      </div>

      <motion.div
        className="grid w-full max-w-[800px] grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-4"
        ref={ref}
        animate={isInView ? { y: 0, scale: 1 } : { y: 20, scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <PricingCard
          title="Standard"
          price={`$${standardPrice.toLocaleString()}/mo`}
          features={[
            "Unlimited work queue",
            "One task at a time",
            "Pause subscription",
            "Unlimited revisions",
            "Unlimited traffic",
            "Full ownership of source code",
          ]}
          tagline="Comparable to $12,500/mo for one senior full-time developer"
        />
        <PricingCard
          title="Pro"
          price={`$${proPrice.toLocaleString()}/mo`}
          top={
            <Badge
              variant="outline"
              className="absolute top-0 -translate-y-1/2 bg-white dark:bg-black"
            >
              Save {Math.round((1 - proPrice / (standardPrice * 2)) * 100)}%
              monthly
            </Badge>
          }
          features={[
            "Unlimited work queue",
            <>
              <strong>Two</strong> requests at a time
            </>,
            "Pause subscription",
            "Unlimited revisions",
            "Unlimited traffic",
            "Full ownership of source code",
          ]}
          tagline="Comparable to $25,000/mo for two senior full-time developers"
        />
      </motion.div>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  top?: React.ReactNode;
  price: string;
  features: React.ReactNode[];
  tagline?: React.ReactNode;
}

const PricingCard = ({
  title,
  top,
  price,
  features,
  tagline,
}: PricingCardProps) => {
  return (
    <div className="relative flex flex-col items-center gap-6 rounded-3xl border border-neutral-300 p-8 dark:border-neutral-700">
      {top}
      <span className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-bold text-neutral-700 dark:text-neutral-400">
          {title}
        </h3>
        <div className="text-4xl font-bold">{price}</div>
        {tagline && (
          <div className="flex max-w-[14rem] items-center gap-2 text-center text-sm opacity-60">
            {tagline}
          </div>
        )}
      </span>
      <div className="h-1 w-16 rounded-full bg-green-500" />
      <div className="flex flex-col items-center items-stretch gap-2">
        {features.map((feature) => (
          <div className="flex items-center gap-2" key={feature?.toString()}>
            <IconCheck size={20} className="flex-shrink-0 text-green-500" />
            <span className="text-neutral-500">{feature}</span>
          </div>
        ))}
      </div>
      <Button className="mt-auto w-full max-w-[220px]">Choose {title}</Button>
    </div>
  );
};

export default Pricing;
