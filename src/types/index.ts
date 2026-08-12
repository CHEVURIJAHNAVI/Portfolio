export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  username?: string;
  stats?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  about: string[];
  cgpa: string;
  currentGoal: string;
  location: string;
  email: string;
  phone: string;
  highlights: {
    label: string;
    value: string;
    icon: string;
  }[];
  funFacts: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  description: string;
}

export interface TechCategory {
  category: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  github: string;
  liveDemo?: string;
  featured: boolean;
  achievements?: string[];
  caseStudy: {
    overview: string;
    features: string[];
    architecture: string;
    challenges: string[];
    results: string[];
    metrics: { label: string; value: string }[];
  };
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  badge: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

export interface CodingProfileItem {
  platform: string;
  username: string;
  url: string;
  stats: {
    label: string;
    value: string;
  }[];
  iconName: string;
  color: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  relationship: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  comingSoon?: boolean;
}
