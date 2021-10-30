import { ProgressProps } from './interface';
import ProgressBar from './ProgressBar';
import ProgressCircle from './ProgressCircle';

const Progress = ({ type, displayValue = false, ...rest }: ProgressProps) => (
  <>
    {type === 'bar' ? (
      <ProgressBar displayValue={displayValue} {...rest} />
    ) : (
      <ProgressCircle displayValue={displayValue} {...rest} />
    )}
  </>
);
export default Progress;
