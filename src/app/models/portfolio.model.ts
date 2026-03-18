// src/app/models/portfolio.model.ts

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1–100
  icon?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  status: 'live' | 'in-progress' | 'archived';
  year: number;
  category: string;
}

export interface Certification {
  id: number;
  title: string;
  provider: string;
  year: number;
  credentialId?: string;
  verifyUrl?: string;
  icon: string;
  badgeColor: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  bio: string;
  yearsOfExperience: number;
  currentRole: string;
  currentCompany: string;
  location: string;
  email: string;
  avatarInitials: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
