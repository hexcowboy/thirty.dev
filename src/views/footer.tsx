import { IconLoader2 } from "@tabler/icons-react";
import clsx from "clsx";
import { useState } from "react";

import Icon from "@/assets/icon";
import Button from "@/components/button";
import { Input } from "@/components/input";
import { description } from "@/constants";

type EmailFormState = "idle" | "loading" | "success" | "error";

const Footer = () => {
  const [state, setState] = useState<EmailFormState>("idle");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setState("loading");

      const result = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!result.ok) {
        throw new Error();
      }

      const json = await result.json();

      if (json.error) {
        throw new Error(json.error);
      }

      setState("success");
    } catch (error) {
      console.error(error);
      setState("error");
    }
  };

  return (
    <footer className="flex flex-col items-center gap-20 rounded-[60px] bg-neutral-100/50 p-12 dark:bg-neutral-900/50 sm:p-20 md:flex-row">
      <div className="m-auto flex max-w-[270px] flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <Icon className="w-12 border-b border-green-500 fill-black dark:fill-white" />
        <p>{description}</p>
      </div>
      <div className="flex grow flex-col items-center gap-4">
        <h4 className="text-center text-xl font-bold">Stay in the loop</h4>
        <form
          className="flex max-w-[500px] flex-col items-stretch gap-2 rounded-3xl border border-neutral-200 p-2 dark:border-neutral-800 sm:flex-row sm:gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Enter your email"
            disabled={state !== "idle"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="min-w-[200px]"
          />
          <Button
            className={clsx(
              "text-md min-w-[140px]",
              state === "success" && "bg-green-700 dark:bg-green-300",
              state === "error" && "bg-red-700 dark:bg-red-300"
            )}
            disabled={state !== "idle"}
            type="submit"
          >
            {state === "loading" ? (
              <span className="animate-spin">
                <IconLoader2 size={14} />
              </span>
            ) : state === "success" ? (
              "Subscribed"
            ) : state === "error" ? (
              "Error"
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
        <p className="text-center text-xs text-neutral-500">
          We will never give out your email.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
