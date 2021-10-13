import { useTheme } from 'styled-components';
import ProgressCircle from '../../../common/progress/ProgressCircle';
import Section from '../../../common/section/Section';
import { SkillsData } from '../api/get-home';
import { SkillContainer, SkillsContainer, SkillTitle } from './styles';

interface SkillsProps {
  data: SkillsData;
}

const Skills = ({ data: { title, items } }: SkillsProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Section title={title}>
      <SkillsContainer>
        {items.map((item) => (
          <SkillContainer key={item.name} type={item.style}>
            <ProgressCircle value={item.level} color={theme.colors.primary} />
            <SkillTitle>{item.name}</SkillTitle>
          </SkillContainer>
        ))}
      </SkillsContainer>
    </Section>
  );
};

export default Skills;
