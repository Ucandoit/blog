import { HomeData } from '../api/get-home';
import About from './About';
import Experiences from './Experiences';
import Person from './Person';
import Skills from './Skills';

interface HomeProps {
  data: HomeData;
}

export default function Home({
  data: { person, about, professionalSkills, technicalSkills, experiences },
}: HomeProps): JSX.Element {
  return (
    <>
      <Person data={person} />
      <About data={about} />
      <Skills data={professionalSkills} />
      <Skills data={technicalSkills} />
      <Experiences data={experiences} />
    </>
  );
}
