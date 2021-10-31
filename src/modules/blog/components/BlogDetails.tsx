import marked from 'marked';
import Prism from 'prismjs';
import { useEffect } from 'react';
import { BlogData } from '../apis/models';
import BackButton from './BackButton';
import { BlogDetailsContainer } from './styles';

interface BlogDetailsProps {
  blog: BlogData;
}

const BlogDetails = ({ blog }: BlogDetailsProps) => {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BackButton />
      <BlogDetailsContainer dangerouslySetInnerHTML={{ __html: marked(blog?.content || '') }} />
      <BackButton />
    </>
  );
};

export default BlogDetails;
