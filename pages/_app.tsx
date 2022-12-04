import type { AppProps } from 'next/app';
import { css, Global } from '@emotion/react';
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
};

const global = css`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
export default App;
