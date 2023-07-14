import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { Badge } from "@/components/badge";
import Button from "@/components/button";
import { Checkbox } from "@/components/checkbox";

const Pricing = () => {
  const [isSupabaseChecked, setIsSupabaseChecked] = useState(false);
  const [isEthereumChecked, setIsEthereumChecked] = useState(false);

  const yearlyPrice =
    5499 + (isSupabaseChecked ? 800 : 0) + (isEthereumChecked ? 800 : 0);
  const montlyPrice =
    5999 + (isSupabaseChecked ? 1000 : 0) + (isEthereumChecked ? 1000 : 0);

  return (
    <div className="flex w-full flex-col items-center gap-12">
      <span className="flex flex-col items-center gap-3">
        <h2 className="max-w-[40rem] text-xl font-bold text-green-500 sm:text-2xl">
          Pricing
        </h2>
        <h1 className="max-w-[44rem] text-center text-4xl font-bold sm:text-5xl">
          Get full value of every dollar
        </h1>
        <p className="mt-2 text-neutral-500">
          Pre-pay for dev work and pause any time you&apos;re not using it.
        </p>
      </span>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        <PricingCard
          title="Monthly"
          price={`$${montlyPrice.toLocaleString()}/mo`}
          features={[
            "Unlimited work queue",
            "Pause subscription",
            "Unlimited revisions",
            "Unlimited traffic",
            "Full ownership of source code",
          ]}
        />
        <PricingCard
          title="Yearly"
          price={`$${yearlyPrice.toLocaleString()}/mo`}
          top={
            <Badge
              variant="outline"
              className="absolute top-0 -translate-y-1/2 bg-white dark:bg-black"
            >
              Save {Math.round((1 - yearlyPrice / montlyPrice) * 100)}%
            </Badge>
          }
          features={[
            "Discounted monthly price",
            "Unlimited work queue",
            "Pause subscription",
            "Unlimited revisions",
            "Unlimited traffic",
            "Full ownership of source code",
          ]}
        />
        <div className="col-span-1 grid gap-4 rounded-3xl border border-neutral-300 p-4 dark:border-neutral-700 sm:col-span-2 sm:grid-cols-2">
          <div
            className={twMerge(
              "flex grow cursor-pointer select-none items-center gap-2 rounded-2xl bg-neutral-100 px-4 py-2 text-lg font-bold dark:bg-neutral-900",
              isSupabaseChecked && "bg-green-200 dark:bg-green-700"
            )}
            onClick={() => setIsSupabaseChecked(!isSupabaseChecked)}
          >
            <div className="flex grow items-center gap-3">
              <Checkbox checked={isSupabaseChecked} />
              <span>Supabase integration</span>
            </div>
          </div>
          <div
            className={twMerge(
              "flex grow cursor-pointer select-none items-center gap-2 rounded-2xl bg-neutral-100 px-4 py-2 text-lg font-bold dark:bg-neutral-900",
              isEthereumChecked && "bg-green-200 dark:bg-green-700"
            )}
            onClick={() => setIsEthereumChecked(!isEthereumChecked)}
          >
            <div className="flex grow items-center gap-3">
              <Checkbox checked={isEthereumChecked} />
              <span>Ethereum integration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  top?: React.ReactNode;
  price: string;
  features: string[];
}

const PricingCard = ({ title, top, price, features }: PricingCardProps) => {
  return (
    <div className="relative flex flex-col items-center gap-6 rounded-3xl border border-neutral-300 p-8 dark:border-neutral-700">
      {top}
      <span className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-bold text-neutral-700 dark:text-neutral-400">
          {title}
        </h3>
        <div className="text-4xl font-bold">{price}</div>
      </span>
      <div className="h-1 w-16 rounded-full bg-green-500" />
      <div className="flex flex-col items-center items-stretch gap-2">
        {features.map((feature) => (
          <div className="flex items-center gap-2" key={feature}>
            <IconCheck size={20} color="green" className="flex-shrink-0" />
            <span className="text-neutral-500">{feature}</span>
          </div>
        ))}
      </div>
      <Button className="mt-auto w-full max-w-[220px]">Choose {title}</Button>
    </div>
  );
};

export default Pricing;
