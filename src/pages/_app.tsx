import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import { PreSvg } from "../components/Svg";
import { useRouter } from "next/router";
import { useLangStore } from "common";
import { useEffect } from "react";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

/* Точка входу в программу */

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const { set } = useLangStore();
  useEffect(() => {
    if (locale) {
      set(locale);
    }
    return () => {};
  }, [locale, set]);
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          type="image/svg"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎏</text></svg>"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="RayLiao - Hakka Canton - 
      Father & Husband - Front-end developer / Photography enthusiasts / Swimfan"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Script
        async
        defer
        data-website-id="4e517b17-fc44-4044-8427-896e6f22006f"
        src="https://analysis.puffin.studio/umami.js"
      />
      <PreSvg />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
