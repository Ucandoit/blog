import { GetStaticProps } from 'next';
import SEO from '../../common/seo/SEO';
import { BlogSummary, getBlogs } from '../../modules/blog';
import { BlogData } from '../../modules/blog/apis/models';

interface BlogsProps {
  blogs: BlogData[];
}

const Blogs = ({ blogs }: BlogsProps) => (
  <>
    <SEO title="ZHAO Yukan's blog" />
    {blogs.map((blog) => (
      <BlogSummary key={blog.id} blog={blog} />
    ))}
  </>
);

export default Blogs;

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getBlogs();
  return {
    props: { blogs },
    revalidate: 600,
  };
};
