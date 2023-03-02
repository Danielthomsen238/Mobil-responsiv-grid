import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/themes/MainThemes";
import { GlobalStyles } from "../src/styles/Global";
import Auth from "../components/auth";
import Head from "next/head";
import "../src/styles/GlobalStyles.css";
import Navbar from "../components/Navbar";

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Navbar />
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};
export default App;
