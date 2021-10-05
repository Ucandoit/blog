import Link from 'next/link';
import { useEffect, useState } from 'react';
import Menu from '../menu/Menu';
import useWindowSize from '../useWindowSize';
import { StyledHeader, StyledNav } from './styles';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClickMenu = () => setOpen(!open);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width >= 768) {
      setOpen(false);
    }
  }, [width]);

  return (
    <StyledHeader>
      <StyledNav>
        <button type="button" onClick={handleClickMenu}>
          <div className="iconfont icon-menu" />
        </button>
        <Link href="/">
          <a title="Home">ucandoit.io</a>
        </Link>
        <Menu open={open} handleClickMenu={handleClickMenu} />
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
