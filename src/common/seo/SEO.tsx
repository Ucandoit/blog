import Head from 'next/head';

interface SEOProps {
  title: string;
  showOg?: boolean;
}

const DESCRIPTION = `ZHAO Yukan's personal website | Senior software engineer`;
const URL = 'https://ucandoit.io';

const SEO = ({ title, showOg = false }: SEOProps): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={DESCRIPTION} />
    <meta name="keywords" content="zhao yukan, zhao, yukan, fullstack, senior software engineer, javascript, nodejs" />
    {showOg ? (
      <>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:url" content={URL} />
        <meta name="twitter:image" content="" />
      </>
    ) : null}
  </Head>
);

export default SEO;
