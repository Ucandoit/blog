import { HomeData } from '../api/get-home';
import About from './About';
import Person from './Person';
import Skills from './Skills';

interface HomeProps {
  data: HomeData;
}

export default function Home({ data: { person, about, professionalSkills, technicalSkills } }: HomeProps): JSX.Element {
  return (
    <>
      <Person data={person} />
      <About data={about} />
      <Skills data={professionalSkills} />
      <Skills data={technicalSkills} />
    </>
  );
}
