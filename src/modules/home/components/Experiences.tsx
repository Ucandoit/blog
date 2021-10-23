import Section from '../../../common/section/Section';
import TimelineItem from '../../../common/timeline/TimelineItem';
import { HomeData } from '../api/get-home';
import { ExperiencePeriod, ExperienceTitle } from './styles';

interface ExperiencesProps {
  data: HomeData['experiences'];
}

const Experiences = ({ data: { title, items } }: ExperiencesProps) => (
  <Section title={title}>
    {items.map(({ id, begin, end, company, position, description }) => (
      <TimelineItem
        key={id}
        leftContent={
          <>
            <ExperiencePeriod>
              {begin} - {end}
            </ExperiencePeriod>
            <div>{company}</div>
          </>
        }
        rightContent={
          <>
            <ExperienceTitle>{position}</ExperienceTitle>
            <div>{description}</div>
          </>
        }
      />
    ))}
  </Section>
);

export default Experiences;
