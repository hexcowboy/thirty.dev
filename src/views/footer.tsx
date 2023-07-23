import Icon from "@/assets/icon";
import Button from "@/components/button";
import { Input } from "@/components/input";
import { description } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between gap-12 rounded-[60px] bg-neutral-100/50 p-12 dark:bg-neutral-900/50 sm:p-20 lg:flex-row">
      <div className="flex max-w-[270px] flex-col gap-4">
        <Icon className="w-12 fill-black dark:fill-white" />
        <p>{description}</p>
      </div>
      <div className="flex grow flex-col items-center gap-4">
        <h4 className="text-center text-xl font-bold">Stay in the loop</h4>
        <span className="flex max-w-[500px] gap-4 rounded-3xl border border-neutral-200 p-2 dark:border-neutral-800">
          <Input placeholder="Enter your email" />
          <Button className="text-md">Subscribe</Button>
        </span>
        <p className="text-center text-xs text-neutral-500">
          We will never give out your email.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
