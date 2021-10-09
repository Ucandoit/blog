import styled, { css } from 'styled-components';

export const PersonContainer = styled.section`
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const IntroContainer = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text}90;
  `}
`;

export const NameContainer = styled.h1`
  ${({ theme }) => css`
    font-size: 3rem;
    margin: ${theme.spacing.xs} 0;
  `}
`;

export const JobContainer = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;
