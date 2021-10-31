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

export async function getStaticProps() {
  const data = await getHome();
  return {
    props: { data },
  };
}
