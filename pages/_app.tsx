import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import '../styles/globals.css';
import '../styles/styles.css';
import '../styles/intro.css';
import '../styles/navbar.css';
import '../styles/projects.css';
import '../styles/expertise.css';
import '../styles/experience.css';

export default function App({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(ScrollTrigger);

  const theme = createTheme({
    type: 'dark',
  });

  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
