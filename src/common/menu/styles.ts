import styled, { css } from 'styled-components';
import MenuItem from './MenuItem';

const StyledMenuItem = styled(MenuItem)<{ open: boolean }>`
  ${({ theme, open }) => css`
    text-transform: uppercase;
    color: ${theme.colors.text};
    font-weight: bold;
    text-decoration: none;
    height: 3rem;
    line-height: 3rem;
    cursor: pointer;
    user-select: none;
    padding: 0 15px;
    border-top: 1px solid ${theme.colors.text}50;
    display: ${open ? 'block' : 'none'};

    @media (min-width: 768px) {
      display: inline;
      border: none;
      height: 4rem;
      line-height: 4rem;
    }
  `}
`;

const StyledMenu = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    display: flex;

    @media (max-width: 767px) {
      position: absolute;
      top: 0;
      bottom: 0;
      left: -320px;
      flex-direction: column;
      width: 320px;
      background-color: ${theme.colors.background};
      transform: ${open ? 'translate(320px);' : 'translate(0)'};
      visibility: ${open ? 'visible' : 'hidden'};
      transition: 0.3s ease-in-out;
    }
  `}
`;

const CloseWrapper = styled.div`
  height: calc(3rem - 1px);
`;

export { StyledMenuItem, StyledMenu, CloseWrapper };
