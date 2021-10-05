import { CloseWrapper, StyledMenu, StyledMenuItem } from './styles';

const menuItems = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/blogs',
    title: 'Blogs',
  },
];

interface MenuProps {
  open: boolean;
  handleClickMenu: () => void;
}

export default function Menu({ open, handleClickMenu }: MenuProps): JSX.Element {
  return (
    <StyledMenu open={open}>
      {open ? (
        <CloseWrapper>
          <button type="button" onClick={handleClickMenu}>
            <div className="iconfont icon-close" />
          </button>
        </CloseWrapper>
      ) : null}
      {menuItems.map(({ url, title }) => (
        <StyledMenuItem key={url} url={url} title={title} open={open} />
      ))}
    </StyledMenu>
  );
}
