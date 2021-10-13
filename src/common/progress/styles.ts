import styled from 'styled-components';

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

export const ProgressText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
