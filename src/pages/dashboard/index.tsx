import {
  User,
  createPagesBrowserClient,
  createPagesServerClient,
} from "@supabase/auth-helpers-nextjs";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useContext } from "react";

import Button from "@/components/button";
import SignInWithGithub from "@/components/siw/github";
import SignInWithGoogle from "@/components/siw/google";
import { Database } from "@/models/supabase.types";
import { UserContext, UserProvider } from "@/providers/user-prodiver";
import Navbar from "@/views/navbar";

export const getServerSideProps: GetServerSideProps<{
  user: User | null;
}> = async (ctx) => {
  const supabase = createPagesServerClient<Database>(ctx);
  const user = await supabase.auth.getUser();

  if (user.error) {
    return { props: { user: null } };
  }

  console.log("user", user.data.user);

  return { props: { user: user.data.user } };
};

const Dashboard = () => {
  const supabase = createPagesBrowserClient<Database>();
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);

  const signOut = async () => {
    const res = await supabase.auth.signOut();

    if (res.error) {
      console.error(res.error);
      return;
    }

    dispatch({ type: "CLEAR" });
  };

  return (
    <span className="flex min-h-[90svh] flex-col items-center">
      <main className="flex w-full max-w-[1200px] grow flex-col gap-10 px-8 py-12 sm:px-12">
        <Navbar animate={false} isDashboard />
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          {user ? (
            <>
              {user.email}
              <Button onClick={signOut}>Sign out</Button>
            </>
          ) : (
            <>
              <SignInWithGoogle supabase={supabase} />
              <SignInWithGithub supabase={supabase} />
            </>
          )}
        </div>
      </main>
    </span>
  );
};

const Page: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props
) => {
  return (
    <UserProvider user={props.user}>
      <Dashboard />
    </UserProvider>
  );
};

export default Page;
