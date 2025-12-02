export interface FacultyMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
}

export interface Announcement {
  id: number;
  date: string;
  title: string;
  summary: string;
  category: 'Academic' | 'Sports' | 'Arts' | 'General' | 'Admissions';
}

export interface Department {
  id: string;
  name: string;
  description: string;
  head: string;
  icon: string;
}

export interface Statistic {
  label: string;
  value: string;
  description: string;
}