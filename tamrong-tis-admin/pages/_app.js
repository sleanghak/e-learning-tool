import '../styles/globals.css'
import Header from "../components/templates/layout/Header";
import { ThemeProvider } from "@mui/material/styles";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <NextNprogress
          color="#FE6B8B"
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
        />
        {/* components import header for title */}
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
