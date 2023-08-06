import Link from "next/link";

import SignInWithGithub from "@/components/siw/github";
import SignInWithGoogle from "@/components/siw/google";

const SignIn = () => {
  return (
    <div className="flex grow flex-col items-center justify-center gap-4">
      <SignInWithGoogle />
      <SignInWithGithub />
      <p className="max-w-[200px] text-center font-mono text-xs opacity-70">
        Contact{" "}
        <Link href="mailto:support@thirty.dev" className="text-green-500">
          Support
        </Link>{" "}
        if you are unable to sign in.
      </p>
    </div>
  );
};

export default SignIn;
