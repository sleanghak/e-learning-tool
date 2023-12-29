import '../styles/globals.css'
import Header from "../components/templates/layouts/Header";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {

  return (
    <>
      {/* components import header for title */}
      <NextNprogress
        color="#FE6B8B"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
      />
      <Header />
      < Component {...pageProps} />
    </>
  )
}

export default MyApp;
