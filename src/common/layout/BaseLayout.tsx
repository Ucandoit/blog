import { ReactNode } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { StyledMain } from './styles';

type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}
