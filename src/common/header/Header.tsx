import { useEffect, useState } from 'react';
import Menu from '../menu/Menu';
import useWindowSize from '../useWindowSize';
import { StyledHeader, StyledLogo, StyledNav } from './styles';

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
        <StyledLogo />
        <Menu open={open} handleClickMenu={handleClickMenu} />
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
