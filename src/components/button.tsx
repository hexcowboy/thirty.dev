import { createElement } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  icon?: React.ReactNode;
}

const variants = {
  primary: "bg-black text-white dark:bg-white dark:text-black",
  secondary: "bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white",
  green: "bg-green-500 text-white dark:text-white",
};

const Button = ({ variant = "primary", ...props }: Props) => {
  return createElement(
    "button",
    {
      ...props,
      className: twMerge(
        variants[variant],
        "rounded-2xl px-5 py-2 text-lg font-bold flex items-center gap-2 justify-center",
        props.className
      ),
    },
    props.icon && props.icon,
    props.children
  );
};

export default Button;
