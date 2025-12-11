import { FacultyMember, Announcement, Department, Statistic } from './types';

export const FACULTY: FacultyMember[] = [
  {
    id: 1,
    name: "Mrs. Eleanor Vance",
    role: "Headmistress",
    department: "Administration",
    // Image 2
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyBrX1bkCUuhCpqLlluf5F_JFyT_2sPRxU4C9Fl7rLcHvpNlMjv_bA8Gip3jUU5iz2l9VzfrNFCBHnRp7dHsKmsG7-3R_YBaqBWGs3PWgL1K3Jp4W1QzoZaTPBasASCrIcdd_h3=w800-h1000-c",
    bio: "With over 20 years in early childhood education, Mrs. Vance ensures a nurturing environment for all smart kids."
  },
  {
    id: 2,
    name: "Mr. Arthur Pendelton",
    role: "Head of JHS",
    department: "Junior High",
    // Image 3
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwpY-ShTkE-3YS3AuMOwwbq9nIrOkRQ2C4zMGVHTN3JowQTrsxtNkHpsZKi-D0KtoHuKA15K4Fd3qK1Tn8eTxDf5yh5PLeOTeYnxirAKQA7YG--9tw0A_4eTowzn4bPkcXURzEg=w800-h1000-c",
    bio: "Specializing in Mathematics and Science, ensuring our final year students are ready for their BECE."
  },
  {
    id: 3,
    name: "Ms. Sarah Jenkins",
    role: "Preschool Coordinator",
    department: "Preschool",
    // Image 1
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w800-h1000-c",
    bio: "Expert in Montessori methods, Ms. Jenkins oversees our Creche and Nursery departments."
  },
  {
    id: 4,
    name: "Mr. Marcus Thorne",
    role: "Sports Director",
    department: "Co-curricular",
    // Image 3 (Repeated to fill 4 slots with available 3 images)
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwpY-ShTkE-3YS3AuMOwwbq9nIrOkRQ2C4zMGVHTN3JowQTrsxtNkHpsZKi-D0KtoHuKA15K4Fd3qK1Tn8eTxDf5yh5PLeOTeYnxirAKQA7YG--9tw0A_4eTowzn4bPkcXURzEg=w800-h1000-c",
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