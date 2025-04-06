import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { IconProps } from "@/components/icons";

export interface SubTab {
  title: string;
  subtitle?: string;
  logoUrl?: string;
  period: string;
  positionType?: string;
  description?: string;
}

export interface WorkExperience {
  company: string;
  href: string;
  badges: readonly string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  positionType?: string;
  description?: string;
  subtabs?: SubTab[];
}

export interface Education {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
  description?: string;
  subtabs?: SubTab[];
}

export interface ProjectLink {
  type: string;
  href: string;
  icon: React.ReactElement;
}

export interface Project {
  title: string;
  href: string;
  dates: string;
  active?: boolean;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image?: string;
  video?: string;
}

export interface HackathonLink {
  title: string;
  href: string;
  icon: React.ReactElement;
}

export interface Hackathon {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  win?: string;
  mlh?: string;
  links: HackathonLink[];
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<IconProps>;
  navbar: boolean;
}

export interface ResumeData {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: readonly string[];
  contact: {
    email: string;
    tel: string;
    social: {
      [key: string]: {
        name: string;
        url: string;
        icon: React.ComponentType<{ className?: string }>;
        navbar: boolean;
      };
    };
  };
  navbar: readonly {
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
  }[];
  work: readonly {
    company: string;
    href: string;
    badges: readonly string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    positionType: string;
    description: string;
    subtabs?: readonly {
      title: string;
      subtitle?: string;
      logoUrl?: string;
      period: string;
      positionType?: string;
      description?: string;
    }[];
  }[];
  education: readonly {
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
    description?: string;
    subtabs?: readonly {
      title: string;
      subtitle?: string;
      logoUrl?: string;
      period: string;
      positionType?: string;
      description?: string;
    }[];
  }[];
  projects: readonly {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: readonly string[];
    links: readonly {
      type: string;
      href: string;
      icon: React.ReactNode;
    }[];
    image: string;
    video: string;
  }[];
  hackathons: readonly {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    mlh?: string;
    win?: string;
    links: readonly {
      title: string;
      icon: React.ReactNode;
      href: string;
    }[];
  }[];
  awards: readonly {
    title: string;
    date: string;
    tag?: string;
    category: string;
    description?: string;
  }[];
} 