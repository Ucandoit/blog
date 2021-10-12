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
