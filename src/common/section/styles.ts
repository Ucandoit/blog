import styled, { css } from 'styled-components';

const SectionContainer = styled.section`
  margin-top: 2rem;
`;

const SectionTitle = styled.h2`
  margin: 1rem 0;
  ${({ theme }) => css`
    &::before {
      content: '>';
      color: ${theme.colors.primary};
      margin-right: ${theme.spacing.xs};
    }
  `}
`;

export { SectionContainer, SectionTitle };
