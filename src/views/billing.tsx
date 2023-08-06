import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { IconCircle, IconCircleCheck } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import {
  ForwardedRef,
  MouseEventHandler,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

import Button from "@/components/button";
import { Skeleton } from "@/components/skeleton";
import { PlanId, dollars, plans } from "@/constants";
import { env } from "@/env.mjs";
import { useToast } from "@/hooks/use-toast";
import { CreatePaymentIntentResponse } from "@/pages/api/stripe/create-payment-intent";
import { appearance } from "@/styles/stripe";

const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

interface BillingStripeHandles {
  submitHandler: () => void;
}

interface Props {
  current?: PlanId;
}

const Billing = ({ current }: Props) => {
  const [selected, setSelected] = useState<PlanId | undefined>(current);
  const [clientSecret, setClientSecret] = useState<Record<PlanId, string>>({});
  const billingStripeRef = useRef<BillingStripeHandles | null>(null);
  const { toast } = useToast();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    async function fetchClientSecret() {
      if (!selected) return;

      try {
        const res = await fetch("/api/stripe/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ priceId: selected }),
        });

        if (!res.ok) {
          toast({
            title: "Try again later",
            description: "Error communicating with Stripe",
            variant: "error",
          });
        }

        const data: CreatePaymentIntentResponse = await res.json();

        if ("error" in data) {
          toast({
            title: "Try again later",
            description: data.error,
            variant: "error",
          });
          return;
        }

        setClientSecret((prev) => ({
          ...prev,
          [selected]: data.clientSecret,
        }));
      } catch (error) {
        toast({
          title: "Try again later",
          description: "An error occurred on our servers",
          variant: "error",
        });
        console.error(error);
      }
    }

    fetchClientSecret();
  }, [selected, toast]);

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the exposed submitHandler method from BillingStripe
    billingStripeRef.current?.submitHandler();
  };

  return (
    <div className="grid w-full gap-8 lg:grid-cols-2 lg:grid-rows-[1fr_auto]">
      <div className="row-span-2 flex flex flex-col flex-col gap-4">
        {Object.keys(plans).map((plan) => (
          <BillingCard
            plan={plan}
            key={plan}
            selected={selected === plan}
            setSelected={setSelected}
            current={current === plan}
          />
        ))}
      </div>
      <div>
        {selected && clientSecret[selected] ? (
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret: clientSecret[selected],
              appearance: appearance(resolvedTheme as "dark" | "light"),
            }}
          >
            <BillingStripe billingStripeRef={billingStripeRef} />
          </Elements>
        ) : (
          <Skeleton className="h-full min-h-[400px] rounded-3xl" />
        )}
      </div>
      <div className="flex justify-center">
        <Button
          variant="green"
          disabled={
            !selected || !clientSecret[selected] || current === selected
          }
          onClick={handleSubmit}
        >
          Confirm Details
        </Button>
      </div>
    </div>
  );
};

interface BillingCardProps {
  plan: string;
  selected: boolean;
  setSelected: (plan: string) => void;
  current?: boolean;
}

const BillingCard = ({
  plan,
  selected,
  setSelected,
  current,
}: BillingCardProps) => {
  const details = plans[plan];
  const price = dollars.format(details.price);

  return (
    <div
      className={twMerge(
        "flex cursor-pointer select-none items-center justify-between rounded-3xl bg-neutral-100 px-8 py-6 dark:bg-neutral-900",
        selected ? "border-2 border-green-500" : "border-2 border-transparent"
      )}
      onClick={() => setSelected(plan)}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">
          {details.name}
          {current ? <em className="text-neutral-500"> - current</em> : ""}
        </h3>
        <p className="font-mono">
          {price}{" "}
          <span className="text-neutral-700 dark:text-neutral-300">
            {details.isYearly ? "per year" : "per month"}
          </span>
        </p>
      </div>
      {selected ? (
        <IconCircleCheck className="text-green-500" />
      ) : (
        <IconCircle />
      )}
    </div>
  );
};

interface BillingStripeProps {
  billingStripeRef: ForwardedRef<BillingStripeHandles>;
}

const BillingStripe = ({ billingStripeRef }: BillingStripeProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/dashboard`,
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.error(result.error.message);
    }
  };

  useImperativeHandle(billingStripeRef, () => ({
    submitHandler: handleSubmit,
  }));

  return <PaymentElement />;
};

export default Billing;
