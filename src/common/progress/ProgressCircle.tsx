import { ProgressCircleContainer, ProgressSVG, ProgressSVGCircle, ProgressText } from './styles';

const SIZE = 44;
const THICKNESS = 3.6;

interface ProgressCircleProps {
  value: number;
  color: string;
  displayValue?: boolean;
}

const ProgressCircle = ({ value, color, displayValue = true }: ProgressCircleProps): JSX.Element => {
  const radius = (SIZE - THICKNESS) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference.toFixed(3);
  const strokeDashoffset = `${((1 - value) * circumference).toFixed(3)}px`;
  return (
    <ProgressCircleContainer>
      <ProgressSVG viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`} color={color}>
        <ProgressSVGCircle
          cx={SIZE}
          cy={SIZE}
          r={radius}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          fill="none"
          strokeWidth={THICKNESS}
        />
      </ProgressSVG>
      {displayValue ? <ProgressText>{value * 100}%</ProgressText> : null}
    </ProgressCircleContainer>
  );
};

export default ProgressCircle;
