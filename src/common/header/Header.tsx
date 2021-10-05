import Link from 'next/link';
import { useState } from 'react';
import { StyledHeader, StyledNav } from './styles';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClickMenu = () => setOpen(!open);
  return (
    <StyledHeader>
      <StyledNav>
        <button type="button" onClick={handleClickMenu}>
          <div className={`iconfont ${open ? 'icon-close' : 'icon-menu'}`} />
        </button>
        <Link href="/">
          <a title="Home">ucandoit.io</a>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
