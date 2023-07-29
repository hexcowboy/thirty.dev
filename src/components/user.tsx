import { Session } from "@supabase/supabase-js";
import { IconLogout, IconUser, IconUserCircle, IconWallet } from "@tabler/icons-react";

import Button from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown";
import { useBreakpoint } from "@/hooks/use-breakpoint";

interface Props {
  user: Session["user"];
}

const User = ({ user }: Props) => {
  const isMobile = useBreakpoint("sm", "max");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="[&:has(:focus-visible)]:ring-red-500"
      >
        <Button
          variant="secondaryBorder"
          className="font-semibold"
          icon={<IconUserCircle stroke={2} className="text-green-500" />}
        >
          {user.email}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align={isMobile ? "center" : "end"}>
        <DropdownMenuItem>
          <IconWallet size={20} />
          Billing
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-500">
          <IconLogout size={20} />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default User;
