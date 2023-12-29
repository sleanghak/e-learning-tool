import RHeader from "@/components/templates/RHeader";
import "@/styles/globals.css";
import theme from "./../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "./../redux/app/store";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <RHeader />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
