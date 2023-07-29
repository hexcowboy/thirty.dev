import { SupabaseClient } from "@supabase/supabase-js";
import { IconBrandGithub } from "@tabler/icons-react";

import Button from "@/components/button";
import { Database } from "@/models/supabase.types";

interface Props {
  supabase: SupabaseClient<Database>;
}

const SignInWithGithub = ({ supabase }: Props) => {
  const signInWithGitHub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
  };

  return (
    <Button onClick={signInWithGitHub} icon={<IconBrandGithub stroke={3} />}>
      Sign in with GitHub
    </Button>
  );
};

export default SignInWithGithub;
