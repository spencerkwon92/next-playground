import { AppProps } from "next/app";
import { DehydratedState } from "react-query/hydration";

export interface MyAppProps extends AppProps {
  pageProps: {
    dehydratedState?: DehydratedState; // Make it optional to account for pages that don't include it
  };
}
