import { GameProvider } from "@/context/GameContext";
import Layout from "@/layouts/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ENCORE Training Platform</title>
      </Head>
      <Layout>
        <GameProvider>
        <Component {...pageProps} />
        </GameProvider>
      </Layout>
    </>
  );
}
