import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '../lib/theme';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Head>
        <title>Aimée Stylus</title>
        <meta name='description' content='Aimée Stylus' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
