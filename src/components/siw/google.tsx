import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { IconBrandGoogle } from "@tabler/icons-react";

import Button from "@/components/button";

const SignInWithGoogle = () => {
  const supabase = useSupabaseClient();

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
    <Button onClick={signInWithGoogle} icon={<IconBrandGoogle stroke={2} />}>
      Sign in with Google
    </Button>
  );
};

export default SignInWithGoogle;
