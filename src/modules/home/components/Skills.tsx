import Section from '../../../common/section/Section';
import { SkillsData } from '../api/get-home';

interface SkillsProps {
  data: SkillsData;
}

const Skills = ({ data: { title } }: SkillsProps): JSX.Element => <Section title={title}>todo</Section>;

export default Skills;
