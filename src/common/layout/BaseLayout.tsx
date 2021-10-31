import React, { ReactNode, useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { GoTopButton, StyledMain } from './styles';

type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
      {showScroll ? (
        <GoTopButton onClick={scrollToTop}>
          <span className="iconfont icon-arrowup" />
        </GoTopButton>
      ) : null}
    </>
  );
}
