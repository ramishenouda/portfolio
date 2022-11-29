import '../styles/globals.css';
import '../styles/intro.css';
import '../styles/navbar.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
