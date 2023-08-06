import { stripe } from "./stripe";
import { supabase } from "./supabase";

export const getOrCreateStripeId = async (
  supabase_: typeof supabase,
  stripe_: typeof stripe
): Promise<string> => {
  const user = await supabase_.auth.getUser();
  const email = user.data.user?.email;
  const user_id = user.data.user?.id;

  if (!email || !user_id) {
    throw new Error("The user is not authenticated in the current context");
  }

  const customerId = await supabase_
    .from("users_stripe")
    .select("stripe_customer_id")
    .single();

  if (customerId.data) {
    return customerId.data?.stripe_customer_id;
  }

  const customer = await stripe_.customers.create({ email });

  // intentionally use the service_role client here so user can't
  // create a customer id for another user
  await supabase.from("users_stripe").insert({
    user_id,
    stripe_customer_id: customer.id,
  });

  return customer.id;
};
