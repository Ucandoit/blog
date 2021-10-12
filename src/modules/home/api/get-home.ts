import { API_URL } from '../../../config/app-config';
import fetchJson from '../../../utils/fetch-json';

const HOME_ENDPOINT = '/home';

export interface HomeData {
  person: PersonData;
  about: AboutData;
  professionalSkills: SkillsData;
  technicalSkills: SkillsData;
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

export interface SkillsData {
  title: string;
  items: SkillData;
}

interface SkillData {
  name: string;
  level: number;
  style: string;
}

export function getHome() {
  return fetchJson<HomeData>(`${API_URL}${HOME_ENDPOINT}`);
}
