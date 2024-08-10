import type { Schema, Attribute } from '@strapi/strapi';

export interface SkillsSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String;
    rating: Attribute.Integer;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'experience';
  };
  attributes: {
    title: Attribute.String;
    companyName: Attribute.Text;
    city: Attribute.String;
    state: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    currentlyWorking: Attribute.Boolean;
    workSummery: Attribute.Text;
  };
}

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
  };
  attributes: {
    universityName: Attribute.String;
    major: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    degree: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'skills.skills': SkillsSkills;
      'experience.experience': ExperienceExperience;
      'education.education': EducationEducation;
    }
  }
}
