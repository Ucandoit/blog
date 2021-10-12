import { PersonData } from '../api/get-home';
import { JobContainer, NameContainer, PersonContainer } from './styles';

interface PersonProps {
  data: PersonData;
}
export default function Person({ data: { title, firstname, lastname, jobPosition } }: PersonProps): JSX.Element {
  return (
    <PersonContainer title={title}>
      <div>
        <NameContainer>
          {firstname} {lastname}
        </NameContainer>
        <JobContainer>{jobPosition}</JobContainer>
      </div>
    </PersonContainer>
  );
}
