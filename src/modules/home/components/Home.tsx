import { HomeData } from '../api/get-home';

interface HomeProps {
  data: HomeData;
}

export default function Home({ data }: HomeProps): JSX.Element {
  return <div>{data.about.description}</div>;
}

// export async function getStaticProps() {
//   const data = await getHome();
//   return {
//     props: { data },
//   };
// }
