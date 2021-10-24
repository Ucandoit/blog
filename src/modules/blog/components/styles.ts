import styled, { css } from 'styled-components';

export const BlogsContainer = styled.div``;

export const BlogSummaryContainer = styled.div`
  margin-bottom: 1.5rem;
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
    color: ${theme.colors.text}99;

    .iconfont {
      display: inline-block;

      margin-right: 5px;

      &:not(:first-child) {
        margin-left: 20px;
      }
    }
  `}
`;

export const TagsContainer = styled.div`
  margin-top: 4px;
`;

export const Tag = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    font-size: 0.8rem;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    border-radius: 4px;
    padding: 4px 10px;

    &:not(:first-child) {
      margin-left: 10px;
    }
  `}
`;
