import "./../styles/globals.css";
import "./../../../packages/ui/styles/style.css";
import "./../styles/fontFamily.css"
import NextNprogress from "nextjs-progressbar";
import Head from "next/head";
import { Header } from './../../../packages/ui/components/templates/layout/Header';
export default function App({ Component, pageProps }) {
  return <>
    <NextNprogress
      color="#FE6B8B"
      startPosition={0.3}
      stopDelayMs={200}
      height={2}
    />
    <Header />
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    </Head>
    <Component {...pageProps} />
  </>;
};

