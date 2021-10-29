import dayjs from 'dayjs';
import Link from 'next/link';
import { BlogData } from '../apis/models';
import { BlogSubTitle, BlogSummaryContainer, BlogTitle, DetailLink, SummaryText, Tag, TagsContainer } from './styles';

interface BlogSummaryProps {
  blog: BlogData;
}

const BlogSummary = ({ blog: { id, title, author, createDate, tags, summary } }: BlogSummaryProps) => {
  const created = dayjs(createDate).format('YYYY-MM-DD');
  return (
    <BlogSummaryContainer>
      <Link href={`/blogs/${id}`} passHref>
        <BlogTitle>{title}</BlogTitle>
      </Link>
      <BlogSubTitle>
        <div className="iconfont icon-user" />
        {author}
        <div className="iconfont icon-date" />
        {created}
      </BlogSubTitle>
      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={tag.name}>{tag.name}</Tag>
        ))}
      </TagsContainer>
      <SummaryText>{summary}</SummaryText>
      <Link href={`/blogs/${id}`} passHref>
        <DetailLink>Continue reading »</DetailLink>
      </Link>
    </BlogSummaryContainer>
  );
};

export default BlogSummary;
