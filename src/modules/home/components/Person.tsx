import { PersonData } from '../api/get-home';
import { JobContainer, NameContainer, PersonContainer, SocialMediaLink } from './styles';

interface PersonProps {
  data: PersonData;
}
export default function Person({
  data: { title, firstname, lastname, jobPosition, socialMedias },
}: PersonProps): JSX.Element {
  return (
    <PersonContainer title={title}>
      <div>
        <NameContainer>
          {firstname} {lastname}
        </NameContainer>
        <JobContainer>{jobPosition}</JobContainer>
        <div>
          {socialMedias.map(({ id, link, svg }) => (
            <SocialMediaLink key={id} href={link} target="_blank" dangerouslySetInnerHTML={{ __html: svg }} />
          ))}
        </div>
      </div>
    </PersonContainer>
  );
}
