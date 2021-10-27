import Image from 'next/image';
import Section from '../../../common/section/Section';
import { API_URL } from '../../../config/app-config';
import { PersonData } from '../api/get-home';
import { JobContainer, NameContainer, PersonBannerContainer, PersonContainer, SocialMediaLink } from './styles';

interface PersonProps {
  data: PersonData;
}
export default function Person({
  data: { title, firstname, lastname, jobPosition, socialMedias, banner },
}: PersonProps): JSX.Element {
  return (
    <Section title={title}>
      <PersonContainer>
        <div>
          <NameContainer>
            {firstname} {lastname}
          </NameContainer>
          <JobContainer>{jobPosition}</JobContainer>
          {socialMedias.map(({ id, link, svg }) => (
            <SocialMediaLink key={id} href={link} target="_blank" dangerouslySetInnerHTML={{ __html: svg }} />
          ))}
        </div>
        <PersonBannerContainer>
          <Image
            src={API_URL + banner.url}
            alt={banner.name}
            width={banner.width}
            height={banner.height}
            layout="responsive"
            priority
          />
        </PersonBannerContainer>
      </PersonContainer>
    </Section>
  );
}
