import { CloseButton, StyledMenu, StyledMenuItem } from './styles';

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
  handleClickMenu: (value?: boolean) => void;
}

export default function Menu({ open, handleClickMenu }: MenuProps): JSX.Element {
  return (
    <StyledMenu open={open}>
      {open ? (
        <CloseButton type="button" onClick={() => handleClickMenu()}>
          <div className="iconfont icon-close" />
        </CloseButton>
      ) : null}
      {menuItems.map(({ url, title }) => (
        <StyledMenuItem key={url} url={url} title={title} open={open} handleClickMenu={handleClickMenu} />
      ))}
    </StyledMenu>
  );
}
