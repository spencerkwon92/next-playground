import React from 'react'
import { AppProps, NextWebVitalsMetric } from "next/app";
import Head from 'next/head'

function App({Component, pageProps}: AppProps){

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Next Playground</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
  
}

export default App;