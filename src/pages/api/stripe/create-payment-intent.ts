import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import type { NextApiRequest, NextApiResponse } from "next";
import z from "zod";

import { getURL } from "@/constants";
import { getOrCreateStripeId } from "@/server/helpers";
import { stripe } from "@/server/stripe";

export type CreatePaymentIntentResponse =
  | {
      clientSecret: string;
    }
  | {
      error: string;
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreatePaymentIntentResponse>
) {
  const { priceId } = req.body;

  const parsedBody = z.string().max(32).startsWith("price_").safeParse(priceId);
  if (!parsedBody.success) {
    return res.status(400).json({ error: parsedBody.error.message });
  }

  try {
    const supabase = createPagesServerClient({ req, res });
    const stripeId = await getOrCreateStripeId(supabase, stripe);

    const paymentIntent = await stripe.setupIntents.create({
      automatic_payment_methods: { enabled: true },
      customer: stripeId,
    });

    if (!paymentIntent.client_secret) {
      return res.status(500).json({ error: "No client secret" });
    }

    return res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    return res.status(500);
  }
}
