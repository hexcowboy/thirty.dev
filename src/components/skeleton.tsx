import { twMerge } from "tailwind-merge";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "animate-pulse rounded-2xl bg-black/10 dark:bg-white/10",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
