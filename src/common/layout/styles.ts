import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledMain = styled.main`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: 20px;
    max-width: ${theme.layout.maxWidth};
  `}
`;
