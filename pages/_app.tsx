import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { NextUIProvider, createTheme } from '@nextui-org/react';

import '../styles/globals.css';
import '../styles/styles.css';
import '../styles/intro.css';
import '../styles/navbar.css';
import '../styles/projects.css';
import '../styles/expertise.css';
import '../styles/experience.css';

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: 'dark',
  });

  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </NextUIProvider>
  );
}
