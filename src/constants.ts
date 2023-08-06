export const description =
  "On-demand frontend development for a low monthly price. Add work to a queue and see results faster at ⅓ the price of an engineer salary.";

export type Plan = {
  name: string;
  isYearly: boolean;
  price: number;
};

export const plans: Record<string, Plan> = {
  price_1NZMV5Jif5i1Xjj4WQlZjiVU: {
    name: "Standard",
    isYearly: false,
    price: 7_000,
  },
  price_1NZMV5Jif5i1Xjj4VezrdU85: {
    name: "Standard Yearly",
    isYearly: true,
    price: 72_000,
  },
  price_1NZMY6Jif5i1Xjj4Ygh68nvS: {
    name: "Pro",
    isYearly: false,
    price: 10_000,
  },
  price_1NZMY6Jif5i1Xjj4O9y8OOop: {
    name: "Pro Yearly",
    isYearly: true,
    price: 108_000,
  },
};

export type PlanId = keyof typeof plans;

export const dollars = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000";
  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to remove trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url.slice(0, -1) : url;
  return url;
};
