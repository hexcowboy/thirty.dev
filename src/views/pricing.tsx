import { IconCheck } from "@tabler/icons-react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";

// import { twMerge } from "tailwind-merge";
import { Badge } from "@/components/badge";
import Button from "@/components/button";
// import { Checkbox } from "@/components/checkbox";
import { Switch } from "@/components/switch";

// const ethereumFeatures = {
//   included: ["RainbowKit wallet auth", "Wagmi smart contract integrations"],
//   excluded: ["Event indexing", "Other wallet auth"],
// };
//
// const supabaseFeatures = {
//   included: [
//     "User auth",
//     "Magic link sign in",
//     "OAuth provider sign in",
//     "Database integrations",
//     "Storage integrations",
//   ],
//   excluded: [],
// };

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  // const [isSupabaseChecked, setIsSupabaseChecked] = useState(false);
  // const [isEthereumChecked, setIsEthereumChecked] = useState(false);
  const [isYearlyPayment, setIsYearlyPayment] = useState(true);

  const standardPrice = isYearlyPayment ? 6000 : 7000;
  //   5999 + (isSupabaseChecked ? 999 : 0) + (isEthereumChecked ? 999 : 0);
  const proPrice = isYearlyPayment ? 9000 : 10000;
  //   8999 + (isSupabaseChecked ? 999 : 0) + (isEthereumChecked ? 999 : 0);

  return (
    <div className="flex w-full flex-col items-center gap-12">
      <span className="flex flex-col items-center gap-3">
        <h2 className="max-w-[40rem] text-xl font-bold text-green-500 sm:text-2xl">
          Pricing
        </h2>
        <h1 className="max-w-[44rem] text-center text-4xl font-bold sm:text-5xl">
          Don&apos;t pay another salary
        </h1>
        <p className="mt-2 text-neutral-500 text-center">
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
        className="grid w-full max-w-[800px] grid-cols-1 gap-12 sm:gap-4 sm:grid-cols-2"
        ref={ref}
        animate={isInView ? { y: 0, scale: 1 } : { y: 20, scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <PricingCard
          title="Standard"
          price={`$${standardPrice.toLocaleString()}/mo`}
          features={[
            "One request at a time",
            "Unlimited work queue",
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
            "Two requests at a time",
            "Unlimited work queue",
            "Pause subscription",
            "Unlimited revisions",
            "Unlimited traffic",
            "Full ownership of source code",
          ]}
          tagline="Comparable to $25,000/mo for two senior full-time developers"
        />

        {/* <div className="col-span-1 grid gap-4 rounded-3xl border border-neutral-300 p-4 dark:border-neutral-700 sm:col-span-2 sm:grid-cols-2"> */}
        {/*   <div className="sm:col-span-2"> */}
        {/*     <h3 className="text-center text-xl font-bold">Add ons</h3> */}
        {/*   </div> */}
        {/*  */}
        {/*   <div className="rounded-3xl border border-neutral-500 p-2"> */}
        {/*     <div */}
        {/*       className={twMerge( */}
        {/*         "flex grow cursor-pointer select-none items-center gap-2 rounded-2xl bg-neutral-100 px-4 py-2 text-lg font-bold dark:bg-neutral-900", */}
        {/*         isSupabaseChecked && "bg-green-200 dark:bg-green-700" */}
        {/*       )} */}
        {/*       onClick={() => setIsSupabaseChecked(!isSupabaseChecked)} */}
        {/*     > */}
        {/*       <div className="flex grow items-center gap-3"> */}
        {/*         <Checkbox checked={isSupabaseChecked} /> */}
        {/*         <span>Supabase</span> */}
        {/*         <span className="ml-auto">+$999/mo</span> */}
        {/*       </div> */}
        {/*     </div> */}
        {/*     <div className="flex flex-col items-center items-stretch gap-2 p-4"> */}
        {/*       {supabaseFeatures.included.map((feature) => ( */}
        {/*         <div className="flex items-center gap-2" key={feature}> */}
        {/*           <IconCheck */}
        {/*             size={20} */}
        {/*             className="flex-shrink-0 text-green-500" */}
        {/*           /> */}
        {/*           <span className="text-neutral-500">{feature}</span> */}
        {/*         </div> */}
        {/*       ))} */}
        {/*       {supabaseFeatures.excluded.map((feature) => ( */}
        {/*         <div className="flex items-center gap-2" key={feature}> */}
        {/*           <IconX size={20} className="flex-shrink-0 text-neutral-500" /> */}
        {/*           <span className="text-neutral-500">{feature}</span> */}
        {/*         </div> */}
        {/*       ))} */}
        {/*     </div> */}
        {/*   </div> */}
        {/*  */}
        {/*   <div className="rounded-3xl border border-neutral-500 p-2"> */}
        {/*     <div */}
        {/*       className={twMerge( */}
        {/*         "flex grow cursor-pointer select-none items-center gap-2 rounded-2xl bg-neutral-100 px-4 py-2 text-lg font-bold dark:bg-neutral-900", */}
        {/*         isEthereumChecked && "bg-green-200 dark:bg-green-700" */}
        {/*       )} */}
        {/*       onClick={() => setIsEthereumChecked(!isEthereumChecked)} */}
        {/*     > */}
        {/*       <div className="flex grow items-center gap-3"> */}
        {/*         <Checkbox checked={isEthereumChecked} /> */}
        {/*         <span>Ethereum</span> */}
        {/*         <span className="ml-auto">+$999/mo</span> */}
        {/*       </div> */}
        {/*     </div> */}
        {/*     <div className="flex flex-col items-center items-stretch gap-2 p-4"> */}
        {/*       {ethereumFeatures.included.map((feature) => ( */}
        {/*         <div className="flex items-center gap-2" key={feature}> */}
        {/*           <IconCheck */}
        {/*             size={20} */}
        {/*             className="flex-shrink-0 text-green-500" */}
        {/*           /> */}
        {/*           <span className="text-neutral-500">{feature}</span> */}
        {/*         </div> */}
        {/*       ))} */}
        {/*       {ethereumFeatures.excluded.map((feature) => ( */}
        {/*         <div className="flex items-center gap-2" key={feature}> */}
        {/*           <IconX size={20} className="flex-shrink-0 text-neutral-500" /> */}
        {/*           <span className="text-neutral-500">{feature}</span> */}
        {/*         </div> */}
        {/*       ))} */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}
      </motion.div>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  top?: React.ReactNode;
  price: string;
  features: string[];
  tagline?: string;
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
          <div className="flex items-center gap-2" key={feature}>
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
