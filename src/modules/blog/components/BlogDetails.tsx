import marked from 'marked';
import Prism from 'prismjs';
import { useEffect } from 'react';
import { BlogData } from '../apis/models';
import { BlogDetailsContainer } from './styles';

interface BlogDetailsProps {
  blog: BlogData;
}

const BlogDetails = ({ blog }: BlogDetailsProps) => {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, []);
  return <BlogDetailsContainer dangerouslySetInnerHTML={{ __html: marked(blog.content as string) }} />;
};

export default BlogDetails;
