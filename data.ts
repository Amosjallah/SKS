import { FacultyMember, Announcement, Department, Statistic } from './types';

export const FACULTY: FacultyMember[] = [
  {
    id: 1,
    name: "Mrs. Eleanor Vance",
    role: "Headmistress",
    department: "Administration",
    image: "https://picsum.photos/id/64/400/500",
    bio: "With over 20 years in early childhood education, Mrs. Vance ensures a nurturing environment for all smart kids."
  },
  {
    id: 2,
    name: "Mr. Arthur Pendelton",
    role: "Head of JHS",
    department: "Junior High",
    image: "https://picsum.photos/id/338/400/500",
    bio: "Specializing in Mathematics and Science, ensuring our final year students are ready for their BECE."
  },
  {
    id: 3,
    name: "Ms. Sarah Jenkins",
    role: "Preschool Coordinator",
    department: "Preschool",
    image: "https://picsum.photos/id/342/400/500",
    bio: "Expert in Montessori methods, Ms. Jenkins oversees our Creche and Nursery departments."
  },
  {
    id: 4,
    name: "Mr. Marcus Thorne",
    role: "Sports Director",
    department: "Co-curricular",
    image: "https://picsum.photos/id/1005/400/500",
    bio: "Dedicated to physical fitness and discipline through football, athletics, and swimming."
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    date: "Oct 24, 2023",
    title: "Regional Quiz Competition",
    summary: "Smart Kids School secured 2nd place in the inter-school math and science quiz competition.",
    category: "Academic"
  },
  {
    id: 2,
    date: "Nov 02, 2023",
    title: "Annual Sports Day",
    summary: "Join us at the school field for a day of fun races, football, and team spirit.",
    category: "Sports"
  },
  {
    id: 3,
    date: "Nov 15, 2023",
    title: "Entrance Exams",
    summary: "Entrance examinations for the upcoming academic year for Primary and JHS levels.",
    category: "Admissions"
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: "preschool",
    name: "Creche & Nursery",
    description: "A safe, nurturing home away from home where toddlers learn through play, song, and social interaction.",
    head: "Ms. Sarah Jenkins",
    icon: "shapes"
  },
  {
    id: "kindergarten",
    name: "Kindergarten",
    description: "Building the foundation for literacy and numeracy with a blend of Montessori and traditional methods.",
    head: "Mrs. Patience Osei",
    icon: "palette"
  },
  {
    id: "primary",
    name: "Primary School",
    description: "Developing core skills in English, Math, Science, and ICT for Grades 1 through 6.",
    head: "Mr. John Doe",
    icon: "book-open"
  },
  {
    id: "jhs",
    name: "Junior High School",
    description: "Rigorous preparation for the BECE with specialized subject teaching in all core areas.",
    head: "Mr. Arthur Pendelton",
    icon: "microscope"
  }
];

export const STATISTICS: Statistic[] = [
  {
    label: "Established",
    value: "2008",
    description: "Over 15 years of excellence"
  },
  {
    label: "Grade Levels",
    value: "Creche-JHS",
    description: "Comprehensive basic education"
  },
  {
    label: "Student Ratio",
    value: "15:1",
    description: "Small class sizes for attention"
  },
  {
    label: "BECE Pass Rate",
    value: "100%",
    description: "Consistent academic distinction"
  }
];