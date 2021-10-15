export interface ProgressProps {
  type: 'bar' | 'circle';
  value: number;
  color: string;
  title?: string;
  displayValue?: boolean;
}
