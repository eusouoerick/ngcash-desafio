import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from 'src/context';
import { GlobalStyles } from '../styles/stitches.config';

export default function App({ Component, pageProps }: AppProps) {
  GlobalStyles();
  return (
    <>
      <Toaster />
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
