import marked from 'marked';
import Section from '../../../common/section/Section';
import TimelineItem from '../../../common/timeline/TimelineItem';
import { HomeData } from '../api/get-home';
import { ExperienceDescription, ExperiencePeriod, ExperienceTitle } from './styles';

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
            {/* eslint-disable-next-line react/no-danger */}
            <ExperienceDescription dangerouslySetInnerHTML={{ __html: marked(description || '') }} />
          </>
        }
      />
    ))}
  </Section>
);

export default Experiences;
