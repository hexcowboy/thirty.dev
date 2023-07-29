import {
  Session,
  createPagesBrowserClient,
  createPagesServerClient,
} from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useEffect, useState } from "react";

import Button from "@/components/button";
import SignInWithGithub from "@/components/siw/github";
import SignInWithGoogle from "@/components/siw/google";
import { Database } from "@/models/supabase.types";
import Navbar from "@/views/navbar";

export const getServerSideProps: GetServerSideProps<{
  user: Session["user"] | null;
}> = async (ctx) => {
  const supabase = createPagesServerClient<Database>(ctx);
  const user = await supabase.auth.getSession();

  if (user.error) {
    return { props: { user: null } };
  }

  return { props: { user: user.data.session?.user ?? null } };
};

const Dashboard: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const supabase = createPagesBrowserClient<Database>();
  const clientUser = useUser();
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    if (clientUser) {
      setUser(clientUser);
    }
  }, [clientUser]);

  const signOut = async () => {
    const res = await supabase.auth.signOut();
    if (res.error) {
      console.error(res.error);
      return;
    }
    setUser(null);
  };

  return (
    <span className="flex min-h-[90svh] flex-col items-center">
      <main className="flex w-full max-w-[1200px] grow flex-col gap-10 px-8 py-12 sm:px-12">
        <Navbar animate={false} isDashboard user={user} />
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

export default Dashboard;
