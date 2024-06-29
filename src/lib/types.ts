import {
  ContentType,
  ContentTypeAllowedResources,
  ContentTypeFieldType,
} from "contentful";

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
