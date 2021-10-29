import styled, { css } from 'styled-components';

export const BlogSummaryContainer = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
`;

export const BlogTitle = styled.a`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.colors.text};
  `}
`;

export const BlogSubTitle = styled.div`
  ${({ theme }) => css`
    margin-top: 4px;
    color: ${theme.colors.text}90;

    .iconfont {
      display: inline-block;
      font-size: 1rem;
      margin-right: 5px;

      &:not(:first-child) {
        margin-left: 20px;
      }
    }
  `}
`;

export const TagsContainer = styled.div`
  margin-top: 10px;
`;

export const Tag = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    font-size: 0.8rem;
    color: ${theme.colors.secondary};
    border: 1px solid ${theme.colors.secondary};
    border-radius: 4px;
    padding: 4px 10px;

    &:not(:first-child) {
      margin-left: 10px;
    }
  `}
`;

export const SummaryText = styled.p`
  word-break: break-word;
  margin: 10px 0 0 0;
`;

export const DetailLink = styled.a`
  ${({ theme }) => css`
    position: absolute;
    right: 10px;
    color: ${theme.colors.primary};
  `}
`;
