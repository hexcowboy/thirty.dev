import { SupabaseClient } from "@supabase/supabase-js";
import { IconBrandGoogle } from "@tabler/icons-react";

import Button from "@/components/button";
import { Database } from "@/models/supabase.types";

interface Props {
  supabase: SupabaseClient<Database>;
}

const SignInWithGoogle = ({ supabase }: Props) => {
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
  };

  return (
    <Button onClick={signInWithGoogle} icon={<IconBrandGoogle stroke={4} />}>
      Sign in with Google
    </Button>
  );
};

export default SignInWithGoogle;
