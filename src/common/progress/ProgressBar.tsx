import { ProgressProps } from './interface';
import {
  ProgressBarBackground,
  ProgressBarContainer,
  ProgressBarPercent,
  ProgressBarTitle,
  ProgressBarValue,
} from './styles';

const ProgressBar = ({ value, color, title, displayValue = true }: Omit<ProgressProps, 'type'>) => (
  <ProgressBarContainer>
    {title ? <ProgressBarTitle>{title}</ProgressBarTitle> : null}
    {displayValue ? <ProgressBarValue>{value * 100}%</ProgressBarValue> : null}
    <ProgressBarBackground>
      <ProgressBarPercent value={value} color={color} />
    </ProgressBarBackground>
  </ProgressBarContainer>
);

export default ProgressBar;
