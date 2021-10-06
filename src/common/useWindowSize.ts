import { useEffect, useState } from 'react';

interface Size {
  width: number;
  height: number;
}

export default function useWindowSize(): Size {
  const ssr = typeof window === 'undefined';
  const [windowSize, setWindowSize] = useState<Size>({
    width: !ssr ? window.innerWidth : 1920,
    height: !ssr ? window.innerHeight : 1080,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Call handler right away so state gets updated with initial window size
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}
