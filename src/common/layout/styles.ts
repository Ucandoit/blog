import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledMain = styled.main`
  ${({ theme }) => css`
    margin: 3rem auto 0;
    padding: 20px;
    max-width: ${theme.layout.maxWidth};
    width: 100%;

    @media (min-width: 768px) {
      margin-top: 4rem;
    }
  `}
`;
