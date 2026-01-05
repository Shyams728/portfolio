import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  category: 'Data Science' | 'Web Scraping' | 'Machine Learning' | 'OCR' | 'Analytics';
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