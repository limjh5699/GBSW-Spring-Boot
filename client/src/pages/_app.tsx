import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";

import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
}
