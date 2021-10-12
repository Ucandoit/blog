import { ReactNode } from 'react';
import { SectionContainer, SectionTitle } from './styles';

interface SectionProps {
  title?: string;
  className?: string;
  children?: ReactNode;
}

const Section = ({ title, children, className }: SectionProps): JSX.Element => (
  <SectionContainer className={className}>
    {title ? <SectionTitle>{title}</SectionTitle> : null}
    {children}
  </SectionContainer>
);

export default Section;
