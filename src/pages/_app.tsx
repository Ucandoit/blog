import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import BaseLayout from '../common/layout/BaseLayout';
import GlobalStyle from '../styles/global-style';
import '../styles/iconfont.css';
import { darkTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <BaseLayout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  );
}
export default MyApp;
