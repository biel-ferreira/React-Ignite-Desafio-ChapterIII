import { AppProps } from 'next/app';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  console.log("oi");
  

  return <Component {...pageProps} />;
}

export default MyApp;
