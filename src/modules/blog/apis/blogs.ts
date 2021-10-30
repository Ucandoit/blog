import { API_URL } from '../../../config/app-config';
import fetchJson from '../../../utils/fetch-json';
import { BlogData } from './models';

const BLOGS_ENDPOINT = '/blogs';

export async function getBlogs(start = 0, limit = 10): Promise<BlogData[]> {
  const blogs = await fetchJson<BlogData[]>(
    `${API_URL}${BLOGS_ENDPOINT}?_sort=createDate:DESC&_start=${start}&_limit=${limit}`
  );
  // generate slug based on blog title (transform to lowercase and replace all non alphanumeric or '-' by '-')
  blogs.forEach((blog) => {
    // eslint-disable-next-line no-param-reassign
    blog.slug = blog.title
      .toLowerCase()
      .replace(/[^A-Za-z0-9-]/g, '-')
      .replace(/[-]+/g, '-');
  });
  return blogs;
}

export function countBlogs(): Promise<number> {
  return fetchJson<number>(`${API_URL}${BLOGS_ENDPOINT}/count`);
}

export function getBlog(id: number): Promise<BlogData> {
  return fetchJson<BlogData>(`${API_URL}${BLOGS_ENDPOINT}/${id}`);
}
