import { HomeData } from '../api/get-home';
import Person from './Person';

interface HomeProps {
  data: HomeData;
}

export default function Home({ data: { person } }: HomeProps): JSX.Element {
  return <Person data={person} />;
}
