import '../styles/globals.css';
import '../styles/intro.css';
import '../styles/navbar.css';
import '../styles/projects.css';
import '../styles/expertise.css';

import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: 'dark',
  });

  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
