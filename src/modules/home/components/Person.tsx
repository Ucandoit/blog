import { PersonData } from '../api/get-home';
import { IntroContainer, JobContainer, NameContainer, PersonContainer } from './styles';

interface PersonProps {
  data: PersonData;
}
export default function Person({ data: { title, firstname, lastname, jobPosition } }: PersonProps): JSX.Element {
  return (
    <PersonContainer>
      <IntroContainer>{title}</IntroContainer>
      <NameContainer>
        {firstname} {lastname}
      </NameContainer>
      <JobContainer>{jobPosition}</JobContainer>
    </PersonContainer>
  );
}
