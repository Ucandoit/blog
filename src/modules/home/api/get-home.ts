import { API_URL } from '../../../config/app-config';
import fetchJson from '../../../utils/fetch-json';

const HOME_ENDPOINT = '/home';

export interface HomeData {
  person: PersonData;
  about: AboutData;
}

export interface PersonData {
  title: string;
  firstname: string;
  lastname: string;
  jobPosition: string;
}

export interface AboutData {
  title: string;
  description: string;
}

export function getHome() {
  return fetchJson<HomeData>(`${API_URL}${HOME_ENDPOINT}`);
}
