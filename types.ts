import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  challenges?: string[];
  results?: string[];
  tech: string[];
  link: string;
  demoLink?: string;
  category: string;
  stats?: {
    label: string;
    value: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  type: 'work' | 'education';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Technical' | 'Domain' | 'Tools';
  icon?: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}