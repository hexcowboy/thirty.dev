import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

import { Toaster } from "@/components/toaster";
import { description } from "@/constants";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());

  return (
    <>
      <Head>
        <title>Thirty</title>
        <meta name="description" content={description} />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionContextProvider
          supabaseClient={supabaseClient}
          initialSession={pageProps.initialSession}
        >
          <Component {...pageProps} />
          <Toaster />
        </SessionContextProvider>
      </ThemeProvider>
    </>
  );
}
