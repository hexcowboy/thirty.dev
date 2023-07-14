"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { IconCheck } from "@tabler/icons-react";
import * as React from "react";
import { twMerge } from "tailwind-merge";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={twMerge(
      "ring-offset-background focus-visible:ring-ring data-[state=checked]:text-primary-foreground peer h-5 w-5 shrink-0 rounded-lg border border-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black dark:border-white dark:data-[state=checked]:bg-white",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={twMerge(
        "flex items-center justify-center text-white dark:text-black"
      )}
    >
      <IconCheck size={16} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
