import { IconCheck } from "@tabler/icons-react";

const Pricing = () => {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <span className="flex flex-col items-center gap-3">
        <h2 className="max-w-[40rem] text-xl font-bold text-green-500 sm:text-2xl">
          Pricing
        </h2>
        <h1 className="max-w-[40rem] text-center text-4xl font-bold sm:text-5xl">
          You control the price
        </h1>
        <p className="mt-4 text-neutral-500">
          Pause or cancel any time. Get the most bang for your buck.
        </p>
      </span>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <PricingCard
          title="Monthly"
          price="$5,999"
          features={[
            "Unlimited work queue",
            "Unlimited revisions",
            "Unlimited users",
          ]}
        />
        <PricingCard
          title="Yearly"
          price="$5,999"
          features={["Add unlimited work to the queue", "Unlimited revisions"]}
        />
      </div>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  tag?: React.ReactNode;
  price: string;
  features: string[];
}

const PricingCard = ({ title, price, features }: PricingCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border border-neutral-300 p-8 dark:border-neutral-700">
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
            <IconCheck size={20} color="#166534" />
            <span className="text-neutral-500">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
