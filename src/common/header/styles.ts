import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  ${({ theme }) => css`
    height: 3rem;
    border-bottom: 1px solid ${theme.colors.text}50;

    @media (min-width: 768px) {
      height: 4rem;
    }
  `}
`;
export const StyledNav = styled.nav`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;

    button {
      padding: 0;
      cursor: pointer;

      // hide menu button on large screen
      @media (min-width: 768px) {
        display: none;
      }

      .iconfont {
        color: ${theme.colors.primary};
        font-size: 2rem;
        padding: ${theme.spacing.xs};
      }
    }
  `}
`;
