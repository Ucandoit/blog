import marked from 'marked';
import Section from '../../../common/section/Section';
import { AboutData } from '../api/get-home';
import { AboutContent } from './styles';

interface AboutProps {
  data: AboutData;
}

const About = ({ data: { title, description } }: AboutProps): JSX.Element => (
  <Section title={title}>
    <AboutContent dangerouslySetInnerHTML={{ __html: marked(description) }} />
  </Section>
);

export default About;
