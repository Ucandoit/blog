import { createGlobalStyle, css } from 'styled-components';
import { Theme } from './theme';

/**
 * Defines global styles including theme switching.
 */
export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${({ theme }) => css`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    body {
      height: 100vh;
      color: ${theme.colors.text};
      background: ${theme.colors.background};
    }
  `}
`;
