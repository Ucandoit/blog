import styled, { css } from 'styled-components';

export const ProgressSVGCircle = styled.circle`
  stroke: currentColor;
`;

export const ProgressCircleContainer = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  display: inline-block;
`;

export const ProgressSVG = styled.svg`
  transform: rotate(-90deg);
`;

export const ProgressCircleText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 95%;
`;

export const ProgressBarTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProgressBarValue = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ProgressBarBackground = styled.div`
  ${({ theme }) => css`
    margin-top: 1.5rem;
    background-color: ${theme.colors.primaryBg};
  `}
`;

export const ProgressBarPercent = styled.div<{ value: number; color: string }>`
  ${({ value, color }) => css`
    background-color: ${color};
    width: ${value * 100}%;
    height: 0.3rem;
  `}
`;
