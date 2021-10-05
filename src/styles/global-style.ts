import { createGlobalStyle, css } from 'styled-components';
import { Theme } from './theme';

/**
 * Defines global styles including theme switching.
 */
const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${({ theme }) => css`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
        Helvetica Neue, sans-serif;
      font-size: 16px;
    }

    * {
      box-sizing: border-box;
    }

    body {
      height: 100vh;
      color: ${theme.colors.text};
      background: ${theme.colors.background};
    }

    button {
      border: none;
      background: none;
    }
  `}
`;

export default GlobalStyle;
