import "../../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import { MoralisProvider } from "react-moralis";

import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    const serverUrl = process.env.MORALIS_SERVER_URL
        ? process.env.MORALIS_SERVER_URL
        : "";

    const appId = process.env.MORALIS_APP_ID ? process.env.MORALIS_APP_ID : "";
    return (
        <MoralisProvider serverUrl={serverUrl} appId={appId}>
            <ChakraProvider>
                <Head>
                    <title>Moralis Test App</title>
                    <meta name="description" content="Test Moralis app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <Component {...pageProps} />
            </ChakraProvider>
        </MoralisProvider>
    );
}

export default MyApp;
