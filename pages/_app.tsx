import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "./store";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position = 'bottom-left'/>
    </QueryClientProvider>
  )
}
