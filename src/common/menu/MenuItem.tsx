import Link from 'next/link';

interface MenuItemProps {
  url: string;
  title: string;
  className?: string;
  handleClickMenu: (value?: boolean) => void;
}

const MenuItem = ({ className, url, title, handleClickMenu }: MenuItemProps): JSX.Element => (
  <Link href={url}>
    <a
      className={className}
      onClick={() => handleClickMenu(false)}
      onKeyUp={() => handleClickMenu(false)}
      role="link"
      tabIndex={0}
    >
      {title}
    </a>
  </Link>
);

export default MenuItem;
