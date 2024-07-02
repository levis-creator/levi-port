export interface SkillData {
  skill: string;
  percentage: number;
  color: string;
}
export interface AboutData {
  about: string;
  description: any;
  cv: string;
}
export interface ProjectData {
  title: string;
  projectImage: any;
  link: string;
}
export interface ExperienceData {
  companyName: string;
  period: string;
  description: string;
  city: string;
}
export interface ServiceData {
  serviceName: string;
  icon: any;
}

export interface Navlink {
  label: string;
  link: string;
}
export interface StatisticData {
  data: number;
  title: string;
  percentage?: boolean;
}
export interface MessageData {
  username: string;
  email: string;
  subject: string;
  message: string;
}
