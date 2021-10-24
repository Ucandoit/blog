import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    max-width: ${theme.layout.maxWidth};
    margin: auto auto 0;
    padding: ${theme.spacing.md};

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
    }
  `}
`;
