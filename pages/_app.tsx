import '../styles/globals.css';
import '../styles/intro.css';
import '../styles/navbar.css';
import '../styles/projects.css';

import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />;
    </NextUIProvider>
  );
}
