import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { IconBrandGithub } from "@tabler/icons-react";

import Button from "@/components/button";

const SignInWithGithub = () => {
  const supabase = useSupabaseClient();

  const signInWithGitHub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
  };

  return (
    <Button onClick={signInWithGitHub} icon={<IconBrandGithub stroke={2} />}>
      Sign in with GitHub
    </Button>
  );
};

export default SignInWithGithub;
