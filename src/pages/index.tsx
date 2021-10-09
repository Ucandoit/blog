import { getHome, Home, HomeData } from '../modules/home';

interface IndexProps {
  data: HomeData;
}

export default function Index({ data }: IndexProps) {
  return <Home data={data} />;
}

export async function getStaticProps() {
  const data = await getHome();
  return {
    props: { data },
  };
}
