import styled, { css } from 'styled-components';
import Section from '../../../common/section/Section';

export const PersonContainer = styled(Section)`
  & > div {
    text-align: center;

    @media (min-width: 768px) {
      text-align: inherit;
    }
  }
`;

export const NameContainer = styled.h1`
  ${({ theme }) => css`
    font-size: 4rem;
    line-height: 1;
    margin: ${theme.spacing.xs} 0;
  `}
`;

export const JobContainer = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0;
`;

export const AboutContent = styled.div`
  ${({ theme }) => css`
    & br {
      content: ' ';
      margin: ${theme.spacing.md} 0;
      display: block;
    }

    & strong {
      color: ${theme.colors.primary};
    }
  `}
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SkillContainer = styled.div<{ type: 'circle' | 'bar' }>`
  ${({ type }) => css`
    width: ${type === 'circle' ? '50%' : '100%'};
    text-align: center;
    margin-top: 2rem;

    @media (min-width: 768px) {
      width: ${type === 'circle' ? '25%' : '50%'};
    }
  `}
`;

export const SkillTitle = styled.div``;
