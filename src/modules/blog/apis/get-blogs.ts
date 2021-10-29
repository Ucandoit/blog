import { API_URL } from '../../../config/app-config';
import fetchJson from '../../../utils/fetch-json';
import { BlogData } from './models';

const BLOGS_ENDPOINT = '/blogs';

const getBlogs = (start = 0, limit = 10): Promise<BlogData[]> =>
  fetchJson<BlogData[]>(`${API_URL}${BLOGS_ENDPOINT}?_sort=createDate:DESC&_start=${start}&_limit=${limit}`);

export default getBlogs;
