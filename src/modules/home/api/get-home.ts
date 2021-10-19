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
  socialMedias: SocialMediaData[];

  banner: {
    name: string;
    url: string;
    width: number;
    height: number;
  };
}

interface SocialMediaData {
  id: number;
  name?: string;
  link: string;
  icon: {
    url: string;
  };
  svg: string;
}

export interface AboutData {
  title: string;
  description: string;
}

export interface SkillsData {
  title: string;
  items: SkillData[];
}

interface SkillData {
  name: string;
  level: number;
  style: 'circle' | 'bar';
}

export async function getHome() {
  const homeData = await fetchJson<HomeData>(`${API_URL}${HOME_ENDPOINT}`);
  // fetch svg content in order to change its color
  if (homeData && homeData.person.socialMedias.length > 0) {
    homeData.person.socialMedias = await Promise.all(
      homeData.person.socialMedias.map(async (socialMedia) => {
        const svgData = await fetch(API_URL + socialMedia.icon.url);
        return {
          ...socialMedia,
          svg: await svgData.text(),
        };
      })
    );
  }
  return homeData;
}
