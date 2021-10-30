import { useTheme } from 'styled-components';
import { ProgressProps } from './interface';
import { ProgressCircleContainer, ProgressCircleText, ProgressSVG, ProgressSVGCircle } from './styles';

const SIZE = 44;
const THICKNESS = 3.6;

const ProgressCircle = ({ value, color, title, displayValue = true }: Omit<ProgressProps, 'type'>): JSX.Element => {
  const radius = (SIZE - THICKNESS) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference.toFixed(3);
  const strokeDashoffset = `${((1 - value) * circumference).toFixed(3)}px`;
  const theme = useTheme();
  return (
    <>
      <ProgressCircleContainer>
        <ProgressSVG viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`} color={color}>
          <ProgressSVGCircle
            cx={SIZE}
            cy={SIZE}
            r={radius}
            fill="none"
            strokeWidth={THICKNESS}
            color={`${theme.colors.text}50`}
          />
          <ProgressSVGCircle
            cx={SIZE}
            cy={SIZE}
            r={radius}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            fill="none"
            strokeWidth={THICKNESS}
            color={theme.colors.primary}
          />
        </ProgressSVG>
        {displayValue ? <ProgressCircleText>{value * 100}%</ProgressCircleText> : null}
      </ProgressCircleContainer>
      {title ? <div>{title}</div> : null}
    </>
  );
};

export default ProgressCircle;
