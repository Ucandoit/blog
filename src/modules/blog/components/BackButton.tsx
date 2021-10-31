import Link from 'next/link';
import { BackLink } from './styles';

const BackButton = (): JSX.Element => (
  <Link href="/blogs" passHref>
    <BackLink>
      <span className="iconfont icon-arrowleft" /> Back
    </BackLink>
  </Link>
);

export default BackButton;
