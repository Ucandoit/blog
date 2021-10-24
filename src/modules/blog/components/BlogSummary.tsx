import dayjs from 'dayjs';
import Link from 'next/link';
import { BlogData } from '../apis/models';
import { BlogSubTitle, BlogSummaryContainer, BlogTitle, Tag, TagsContainer } from './styles';

interface BlogSummaryProps {
  blog: BlogData;
}

const BlogSummary = ({ blog: { id, title, author, created_at, tags, content } }: BlogSummaryProps) => {
  const created = dayjs(created_at).format('YYYY-MM-DD');
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
      <p>{content}</p>
      <Link href={`/blogs/${id}`}>
        <a>continue</a>
      </Link>
    </BlogSummaryContainer>
  );
};

export default BlogSummary;
