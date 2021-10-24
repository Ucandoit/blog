import { BlogSummary, getBlogs } from '../modules/blog';
import { BlogData } from '../modules/blog/apis/models';

interface BlogsProps {
  blogs: BlogData[];
}

const Blogs = ({ blogs }: BlogsProps) => (
  <>
    {blogs.map((blog) => (
      <BlogSummary key={blog.id} blog={blog} />
    ))}
  </>
);

export default Blogs;

export const getStaticProps = async () => {
  const blogs = await getBlogs();
  return {
    props: { blogs },
  };
};
