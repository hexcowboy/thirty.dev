import type { AppProps } from "next/app";
import Head from "next/head";

import { description } from "@/constants";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Thirty</title>
        <meta name="description" content={description} />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
