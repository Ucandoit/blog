import { GetStaticProps } from 'next';
import SEO from '../common/seo/SEO';
import { getHome, Home, HomeData } from '../modules/home';

interface IndexProps {
  data: HomeData;
}

export default function Index({ data }: IndexProps) {
  return (
    <>
      <SEO title={`ZHAO Yukan's website`} showOg />
      <Home data={data} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getHome();
  return {
    props: { data },
    revalidate: 600,
  };
};
