import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledMain = styled.main`
  ${({ theme }) => css`
    margin: 3rem auto 0;
    padding: 20px;
    max-width: ${theme.layout.maxWidth};
    width: 100%;
    position: relative;

    @media (min-width: 768px) {
      margin-top: 4rem;
    }
  `}
`;

export const GoTopButton = styled.span`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0.5rem;
    right: 1rem;
    background-color: ${theme.colors.primary};
    cursor: pointer;

    .iconfont {
      font-size: 2rem;
    }

    @media (min-width: 1080px) {
      right: calc(50vw - 540px);
    }
  `}
`;
