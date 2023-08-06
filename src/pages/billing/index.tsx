import { User, createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import type { GetServerSideProps } from "next";
import { useContext } from "react";

import { Plan } from "@/constants";
import { Database } from "@/models/supabase.types";
import { UserContext, withUserProviderPage } from "@/providers/user-prodiver";
import { stripe } from "@/server/stripe";
import BillingView from "@/views/billing";
import Navbar from "@/views/navbar";
import SignIn from "@/views/sign-in";

export const getServerSideProps: GetServerSideProps<{
  user: User | null;
  currentPlan: string | null;
}> = async (ctx) => {
  const supabase = createPagesServerClient<Database>(ctx);
  const user = await supabase.auth.getUser();

  if (user.error) {
    return { props: { user: null, currentPlan: null } };
  }

  const stripeCustomer = await supabase
    .from("users_stripe")
    .select("stripe_customer_id")
    .eq("user_id", user.data.user?.id)
    .single();

  if (stripeCustomer.error) {
    if (stripeCustomer.error.code !== "PGRST116") {
      console.error(stripeCustomer.error);
    }
    return { props: { user: user.data.user, currentPlan: null } };
  }

  const stripeSubscription = await stripe.customers.retrieve(
    stripeCustomer.data.stripe_customer_id
  );

  if (stripeSubscription.deleted) {
    return { props: { user: user.data.user, currentPlan: null } };
  }

  return {
    props: { user: user.data.user, currentPlan: "" },
  };
};

const Billing = ({ currentPlan }: { currentPlan: Plan }) => {
  const {
    state: { user },
  } = useContext(UserContext);

  return (
    <span className="flex min-h-[90svh] flex-col items-center">
      <main className="flex min-h-screen w-full max-w-[1200px] grow flex-col gap-10 px-8 py-12 sm:px-12">
        <Navbar animate={false} isDashboard />
        <div className="flex flex-1 flex-col items-center gap-4">
          {user ? <BillingView /> : <SignIn />}
        </div>
      </main>
    </span>
  );
};

export default withUserProviderPage(Billing);
