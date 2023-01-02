import { Head, Html, Main, NextScript } from 'next/document';
import { roboto } from '../lib/theme';

export default function Document() {
  return (
    <Html lang='pt-BR' className={roboto.className}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
