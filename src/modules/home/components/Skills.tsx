import { useTheme } from 'styled-components';
import Progress from '../../../common/progress/Progress';
import Section from '../../../common/section/Section';
import { SkillsData } from '../api/get-home';
import { SkillContainer, SkillsContainer } from './styles';

interface SkillsProps {
  data: SkillsData;
}

const Skills = ({ data: { title, items } }: SkillsProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Section title={title}>
      <SkillsContainer>
        {items.map(({ name, style, level }) => (
          <SkillContainer key={name} type={style}>
            <Progress type={style} title={name} value={level} color={theme.colors.primary} />
          </SkillContainer>
        ))}
      </SkillsContainer>
    </Section>
  );
};

export default Skills;
