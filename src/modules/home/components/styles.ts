import styled, { css } from 'styled-components';

export const PersonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  @media (min-width: 768px) {
    text-align: inherit;
    grid-template-columns: 1fr 1fr;
  }

  & > div {
    text-align: center;
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

export const SocialMediaLink = styled.a`
  ${({ theme }) => css`
    display: inline-block;
    height: 2.5rem;
    width: 2.5rem;
    margin: ${theme.spacing.xs};
    padding: calc(0.5rem - 2px);
    border: 2px solid ${theme.colors.text}50;

    &:hover {
      border-color: ${theme.colors.primary};
      box-shadow: ${theme.colors.primary} 0px 0px 5px;
      transition: all 0.3s ease-in-out 0s;
    }

    svg {
      fill: ${theme.colors.primary};
      width: 1.5rem;
      height: 1.5rem;
    }
  `}
`;

export const PersonBannerContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
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

export const ExperiencePeriod = styled.div`
  font-weight: bold;
`;

export const ExperienceTitle = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  margin-top: -0.25rem;
`;

export const ExperienceDescription = styled.div`
  p,
  ul {
    margin: 0.5rem 0;
  }

  ul {
    padding-left: 1rem;
  }
`;
