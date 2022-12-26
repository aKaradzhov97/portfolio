import type { AppProps } from 'next/app';
import { Source_Sans_Pro } from "@next/font/google";
import { Global } from '@emotion/react';
import { global } from "@styles";

const font = Source_Sans_Pro({
  weight: ['300', '600'],
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
          font-weight: 300;
        }
      `}</style>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
