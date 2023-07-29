import { createElement, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  icon?: React.ReactNode;
  iconLeft?: boolean;
}

const variants = {
  primary: "bg-black text-white dark:bg-white dark:text-black",
  secondary: "bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white",
  secondaryBorder:
    "bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800",
  green: "bg-green-500 text-white dark:text-white",
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { variant = "primary", icon, iconLeft, className, ...props }: Props,
    ref
  ) => {
    return createElement(
      "button",
      {
        ...props,
        className: twMerge(
          variants[variant],
          "rounded-2xl px-5 py-2 text-lg font-bold flex items-center gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-offset-white dark:focus-visible:ring-offset-black",
          iconLeft && "flex-row-reverse",
          className
        ),
        ref,
      },
      icon && icon,
      props.children
    );
  }
);
Button.displayName = "Button";

export default Button;
