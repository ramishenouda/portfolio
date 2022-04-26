import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Footer } from '../components/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container flex">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
