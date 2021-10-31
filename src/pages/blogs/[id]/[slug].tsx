import { GetStaticPaths, GetStaticProps } from 'next';
import SEO from '../../../common/seo/SEO';
import { BlogDetails, countBlogs, getBlog, getBlogs } from '../../../modules/blog';
import { BlogData } from '../../../modules/blog/apis/models';

interface BlogProps {
  blog: BlogData;
}

const Blog = ({ blog }: BlogProps): JSX.Element => (
  <>
    <SEO title={`ZHAO Yukan's blog - ${blog?.title}`} />
    <BlogDetails blog={blog} />
  </>
);

// dynamic path /blogs/[id]/[slug]
export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfBlogs = await countBlogs();
  const blogs = await getBlogs(0, numberOfBlogs);

  return {
    paths: blogs.map((blog) => ({
      params: {
        id: `${blog.id}`,
        slug: blog.slug,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blog = await getBlog(parseInt(context.params?.id as string, 10));
  return {
    props: { blog },
    revalidate: 600,
  };
};

export default Blog;
