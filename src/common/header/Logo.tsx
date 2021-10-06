import Link from 'next/link';

interface LogoProps {
  className?: string;
}

// TODO: replace text with a svg image
export default function Logo({ className }: LogoProps): JSX.Element {
  return (
    <Link href="/">
      <a className={className}>ucandoit.io</a>
    </Link>
  );
}
