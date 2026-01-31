export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  category: string;
  technologies: string[];
}

export interface Resume {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    linkedin?: string;
    github?: string;
  };
  experience: Experience[];
  education: any[]; 
  skills: Skill[];
}