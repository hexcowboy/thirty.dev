import * as DialogPrimitive from "@radix-ui/react-dialog";
import { User, useSupabaseClient } from "@supabase/auth-helpers-react";
import { IconUserCircle } from "@tabler/icons-react";
import { useContext } from "react";

import Button from "@/components/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/modal";
import { UserContext } from "@/providers/user-prodiver";

interface Props {
  user: User
}

const User = ({ user }: Props) => {
  const supabase = useSupabaseClient();
  const { dispatch } = useContext(UserContext);

  const handleSignOut = async () => {
    const res = await supabase.auth.signOut();

    if (res.error) {
      console.error(res.error);
      return;
    }

    dispatch({ type: "CLEAR" });
  };

  if (!user) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondaryBorder"
          className="text-md font-semibold"
          icon={<IconUserCircle stroke={2} className="text-green-500" />}
        >
          {user.email}
        </Button>
      </DialogTrigger>
      <DialogContent withoutClose>
        <div className="flex flex-col gap-2">
          <Button variant="red" onClick={handleSignOut}>
            Sign out
          </Button>
          <DialogPrimitive.Close className="flex" asChild>
            <Button variant="tertiary">Close</Button>
          </DialogPrimitive.Close>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default User;
