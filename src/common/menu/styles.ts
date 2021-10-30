import styled, { css } from 'styled-components';
import MenuItem from './MenuItem';

export const StyledMenuItem = styled(MenuItem)<{ open: boolean }>`
  ${({ theme, open }) => css`
    color: ${theme.colors.text};
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    padding: 0 15px;
    border-top: 1px solid ${theme.colors.text}50;
    display: ${open ? 'block' : 'none'};

    ${open
      ? css`
          height: 3rem;
          line-height: 3rem;
        `
      : null}

    @media (min-width: 768px) {
      display: inline;
      border: none;
    }

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;

export const StyledMenu = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    display: flex;

    @media (max-width: 767px) {
      position: absolute;
      top: 0;
      bottom: 0;
      left: -320px;
      flex-direction: column;
      width: 320px;
      height: 100vh;
      background-color: ${theme.colors.background};
      transform: ${open ? 'translate(320px);' : 'translate(0)'};
      visibility: ${open ? 'visible' : 'hidden'};
      transition: 0.3s ease-in-out;
    }
  `}
`;

export const CloseButton = styled.button`
  height: calc(3rem - 1px);
  cursor: pointer;
  text-align: left;
`;
