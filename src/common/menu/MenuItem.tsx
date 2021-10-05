import Link from 'next/link';
import { FC } from 'react';

interface MenuItemProps {
  url: string;
  title: string;
  className?: string;
}

const MenuItem: FC<MenuItemProps> = ({ className, url, title }) => (
  // <div className={className}>
  <Link href={url}>
    <a className={className}>{title}</a>
  </Link>
  // </div>
);

export default MenuItem;
