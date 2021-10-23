import styled, { css } from 'styled-components';

export const TimelineItemContainer = styled.div`
  position: relative;
  display: table;
  table-layout: fixed;
  width: 100%;
  padding-bottom: 1rem;
`;

export const TimelineLeftContainer = styled.div`
  width: 35%;
  display: table-cell;
  padding-right: 25px;
  min-height: 100%;
  text-align: right;
  vertical-align: top;
`;

export const TimelineDivider = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 35%;
    bottom: 0;
    width: 1px;
    background-color: ${theme.colors.text}50;

    &::before {
      content: '';
      display: block;
      box-sizing: border-box;
      width: 17px;
      height: 17px;
      margin-top: 4px;
      margin-left: -8px;
      border-radius: 10px;
      position: absolute;
      background-color: ${theme.colors.primary}50;
    }

    &::after {
      content: '';
      display: block;
      box-sizing: border-box;
      width: 9px;
      height: 9px;
      margin-top: 8px;
      margin-left: -4px;
      border-radius: 5px;
      position: absolute;
      border: 2px solid ${theme.colors.primary};
      background-color: ${theme.colors.background};
    }
  `}
`;

export const TimelineRightContainer = styled.div`
  width: 65%;
  display: table-cell;
  padding-left: 25px;
  padding-right: 15px;
  vertical-align: top;
`;
