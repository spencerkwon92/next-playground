import "@/styles/globals.css";
import "daisyui/dist/full.css";
import {useRef} from "react";
import { NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import {QueryClient, QueryClientProvider, Hydrate} from "react-query";
import { DehydratedState } from "react-query/hydration";
import {ReactQueryDevtools} from "react-query/devtools";
import PropTypes from "prop-types";

import { MyAppProps } from "@/interface/AppProps";

const App = ({ Component, pageProps }: MyAppProps) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <title>Next Playground</title>
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default App;
