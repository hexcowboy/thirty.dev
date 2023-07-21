import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Thirty</title>
        <meta
          name="description"
          content="On-demand frontend development for a low monthly price. Add work to a queue and see results faster at ⅓ the price of an engineer salary."
        />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
