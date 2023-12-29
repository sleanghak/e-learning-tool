import "./../styles/globals.css";
import "./../../../packages/ui/styles/style.css";
import Head from "next/head";
import { Header } from './../../../packages/ui/components/templates/layout/Header';
export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    </Head>
    <Component {...pageProps} />
  </>;
};
