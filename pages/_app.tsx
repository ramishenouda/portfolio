import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { useEffect } from 'react';

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
  const enterScreen = 'restart';
  const forwardPastTheEndPoint = 'resume';
  const backToTheEndPoint = 'none';
  const whenScrollBackToStart = 'reset';

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to('#navbar', {
      scrollTrigger: {
        trigger: '#expertise',
        toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
        start: '100px 40%',
      },
      top: 0,
      duration: 0.5,
    });
  }, []);

  const theme = createTheme({
    type: 'dark',
  });

  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
