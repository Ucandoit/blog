import { ProgressProps } from './interface';
import ProgressBar from './ProgressBar';
import ProgressCircle from './ProgressCircle';

const Progress = ({ type, displayValue = true, ...rest }: ProgressProps) => (
  <>
    {type === 'bar' ? (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <ProgressBar displayValue={displayValue} {...rest} />
    ) : (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <ProgressCircle displayValue={displayValue} {...rest} />
    )}
  </>
);
export default Progress;
