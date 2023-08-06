import { User, createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import type { GetServerSideProps } from "next";
import { useContext, useState } from "react";

import { Skeleton } from "@/components/skeleton";
import { Database } from "@/models/supabase.types";
import { UserContext, withUserProviderPage } from "@/providers/user-prodiver";
import Billing from "@/views/billing";
import Navbar from "@/views/navbar";
import SignIn from "@/views/sign-in";

export const getServerSideProps: GetServerSideProps<{
  user: User | null;
}> = async (ctx) => {
  const supabase = createPagesServerClient<Database>(ctx);
  const user = await supabase.auth.getUser();

  if (user.error) {
    return { props: { user: null } };
  }

  return { props: { user: user.data.user } };
};

type Plan = "standard" | "pro";

const Dashboard = () => {
  const {
    state: { user },
  } = useContext(UserContext);
  const [plan, setPlan] = useState<Plan | null>(null);

  return (
    <span className="flex min-h-[90svh] flex-col items-center">
      <main className="flex min-h-screen w-full max-w-[1200px] grow flex-col gap-10 px-8 py-12 sm:px-12">
        <Navbar animate={false} isDashboard />
        <div className="flex flex-1 flex-col items-center gap-4">
          {user ? (
            plan ? (
              <>{plan}</>
            ) : plan === null ? (
              <Billing />
            ) : (
              <Skeleton className="w-full grow" />
            )
          ) : (
            <SignIn />
          )}
        </div>
      </main>
    </span>
  );
};

export default withUserProviderPage(Dashboard);
