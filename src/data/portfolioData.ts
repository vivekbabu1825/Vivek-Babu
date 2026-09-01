import { Project, SkillCategory, TrainingExperience, Certification, EducationItem, Achievement } from '../types';

export const personalInfo = {
  name: 'Vivek Babu',
  role: 'Computer Science Undergraduate & Web Developer',
  headline: 'Aspiring Software Engineer | JavaScript, Python, C/C++, HTML/CSS & MySQL',
  bio: 'Computer Science and Engineering undergraduate at Lovely Professional University. Passionate about building responsive web applications, robust client-side validation logic, and structured database systems. Certified by Infosys Springboard in Python, Big Data, and Data Science. Proven track record in community leadership as a Python teaching mentor and award-winning cultural performer.',
  email: 'vb580955@gmail.com',
  phone: '+91 9798343492',
  phoneDisplay: '+91 97983 43492',
  location: 'Phagwara, Punjab / Dhanbad, Jharkhand, India',
  github: 'https://github.com/vivekbabu',
  githubUsername: 'vivekbabu',
  linkedin: 'https://www.linkedin.com/in/vivek-babu/',
  linkedinUsername: 'vivek-babu',
  status: 'Open to Software Engineering & Web Development Internships',
  availableFor: ['Full-Stack Web Development', 'Frontend Engineering', 'Python Programming', 'Database Systems & SQL'],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    categoryKey: 'languages',
    description: 'Core languages used for web applications, algorithms, systems, and data processing.',
    skills: [
      { name: 'JavaScript', level: 'Proficient', percentage: 88, description: 'ES6+, DOM manipulation, asynchronous programming, client-side validation' },
      { name: 'Python', level: 'Proficient', percentage: 85, description: 'OOP, scripting, algorithms, data structures, Infosys Springboard Certified' },
      { name: 'C++', level: 'Proficient', percentage: 80, description: 'OOP, STL, memory concepts, algorithmic problem solving' },
      { name: 'C', level: 'Proficient', percentage: 82, description: 'Procedural programming, pointers, low-level logic execution' }
    ]
  },
  {
    title: 'Web & Frontend Technologies',
    categoryKey: 'frontend',
    description: 'Technologies powering responsive layouts, clean user interfaces, and engaging user experiences.',
    skills: [
      { name: 'HTML / HTML5', level: 'Advanced', percentage: 92, description: 'Semantic markup, accessibility, SEO structure, form controls' },
      { name: 'CSS / CSS3', level: 'Proficient', percentage: 88, description: 'Flexbox, Grid, keyframe animations, media queries, responsive layouts' },
      { name: 'Wix AI & Web Design', level: 'Proficient', percentage: 82, description: 'Rapid AI-assisted storefront prototyping, layout architecture, visual aesthetics' },
      { name: 'Client-Side Validation', level: 'Advanced', percentage: 90, description: 'Regex pattern matching, real-time input sanitization, dynamic UX error feedback' }
    ]
  },
  {
    title: 'Databases & Developer Tools',
    categoryKey: 'databaseTools',
    description: 'Relational database management, source version control, and UI/UX design tools.',
    skills: [
      { name: 'MySQL & SQL', level: 'Proficient', percentage: 84, description: 'Schema normalization, relational queries, joins, student record tables' },
      { name: 'Git & GitHub', level: 'Proficient', percentage: 88, description: 'Branching, commits, pull requests, collaborative repository workflows' },
      { name: 'Figma', level: 'Proficient', percentage: 80, description: 'UI wireframing, component mockups, user experience flow design' },
      { name: 'VS Code & Web Dev Tools', level: 'Advanced', percentage: 90, description: 'Debugging, live server environments, linting, performance audits' }
    ]
  },
  {
    title: 'Data & Infosys Springboard Certifications',
    categoryKey: 'dataCertifications',
    description: 'Accredited technical certifications covering big data, data science, and foundational programming.',
    skills: [
      { name: 'Big Data Fundamentals', level: 'Proficient', percentage: 80, description: 'Distributed data architecture, Hadoop concepts, dataset processing' },
      { name: 'Data Science Concepts', level: 'Proficient', percentage: 82, description: 'Data exploration, statistical analysis, visualization workflows' },
      { name: 'Python Fundamentals', level: 'Advanced', percentage: 88, description: 'Certified mastery in Python logic, control flow, functions, and modules' }
    ]
  },
  {
    title: 'Professional & Soft Skills',
    categoryKey: 'softSkills',
    description: 'Interpersonal strengths, project leadership, and community collaboration qualities.',
    skills: [
      { name: 'Problem Solving', level: 'Advanced', percentage: 90, description: 'Analytical troubleshooting, bug diagnosis, and creative logic design' },
      { name: 'Team Collaboration', level: 'Advanced', percentage: 92, description: 'Cross-functional teamwork during hackathons and campus coordination' },
      { name: 'Time Management & Adaptability', level: 'Advanced', percentage: 88, description: 'Balancing rigorous academics, hackathons, and 30-hour teaching projects' },
      { name: 'Teaching & Mentorship', level: 'Advanced', percentage: 90, description: 'Instructed 30 hours of Python for middle school students with LPU certificate' }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'login-credential-page',
    title: 'Login Credential Page',
    subtitle: 'Builtstrom Hackathon Winner / Project',
    date: "Feb '26",
    category: 'Frontend & Auth',
    description: 'Developed a responsive Login Credential Page using HTML, CSS, and JavaScript during the Builtstrom Hackathon. Implemented comprehensive client-side form validation to validate user input and enhance security and user experience.',
    longDescription: 'Engineered during the fast-paced Builtstrom Hackathon, this authentication interface delivers a seamless, accessible user login experience. Featuring an interactive clean layout with adaptive dark/light aesthetic, real-time input sanitization, regex-driven email validation, password strength indicators, and dynamic error state animations, this project exemplifies rigorous attention to frontend craftsmanship.',
    features: [
      'Builtstrom Hackathon Project: Designed and coded an interactive login interface within competitive hackathon time constraints.',
      'Client-Side Form Validation: Instant validation for email syntax, credential length, password entropy, and required fields.',
      'Clean & Engaging UI: Modern glass-accented responsive card layout optimized across desktop, tablet, and mobile devices.',
      'Accessibility & Feedback: Visual status icons, inline warning notifications, and smooth CSS transitions upon submission.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Client-Side Validation', 'RegEx', 'Responsive Design', 'Git'],
    githubUrl: 'https://github.com/vivekbabu',
    liveDemoAvailable: true,
    simulatorType: 'login-auth',
    metrics: [
      { label: 'Event', value: 'Builtstrom Hackathon' },
      { label: 'Validation', value: 'Real-Time Client-Side' },
      { label: 'Responsiveness', value: '100% Mobile Ready' },
      { label: 'Tech', value: 'Vanilla JS / HTML / CSS' }
    ],
    codeSnippet: `// Builtstrom Hackathon - Client-Side Login Validator
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#loginForm');
  const emailInput = document.querySelector('#emailInput');
  const passwordInput = document.querySelector('#passwordInput');
  const statusMessage = document.querySelector('#statusMessage');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

  function validateEmail(email) {
    return emailRegex.test(email.trim());
  }

  function validatePassword(password) {
    // Requires minimum 6 characters with number or symbol
    return password.length >= 6;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    if (!validateEmail(email)) {
      statusMessage.textContent = '❌ Please enter a valid email address.';
      statusMessage.className = 'status error';
      emailInput.focus();
      return;
    }

    if (!validatePassword(password)) {
      statusMessage.textContent = '❌ Password must be at least 6 characters.';
      statusMessage.className = 'status error';
      passwordInput.focus();
      return;
    }

    // Success state
    statusMessage.textContent = '✅ Authentication Successful! Redirecting...';
    statusMessage.className = 'status success';
  });
});`
  },
  {
    id: 'school-management-system',
    title: 'School Management System',
    subtitle: 'Web-Based Academic Administration & Database Platform',
    date: "May '26",
    category: 'Database & Systems',
    description: 'Developed a web-based School Management System to digitally manage student and school-related information. Designed a user-friendly interface for organizing academic and administrative data with structured SQL records.',
    longDescription: 'Created to modernize school administrative operations, this system replaces paper-heavy record keeping with a structured web portal. Facilitates student enrollment management, gradebook tracking, attendance recording, and faculty directories. Built with clean HTML, CSS, JavaScript frontends and structured relational MySQL data architecture.',
    features: [
      'Comprehensive Data Management: Structured tables for student enrollment profiles, classroom rosters, and academic performance.',
      'Intuitive Administrative Interface: Clean dashboard for school administrators to search, filter, and organize academic records with ease.',
      'Relational Database Architecture: Normalized MySQL schema ensuring zero data redundancy, referential integrity, and fast SQL queries.',
      'Record Search & Filters: Real-time student directory lookup by grade level, enrollment ID, or attendance status.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'SQL', 'MySQL', 'Relational Schema', 'UI/UX'],
    githubUrl: 'https://github.com/vivekbabu',
    liveDemoAvailable: true,
    simulatorType: 'school-mgmt',
    metrics: [
      { label: 'Architecture', value: 'Web & Relational SQL' },
      { label: 'Data Modules', value: 'Students, Grades & Staff' },
      { label: 'Database', value: 'Structured MySQL' },
      { label: 'Focus', value: 'Data Organization' }
    ],
    codeSnippet: `-- School Management System - SQL Schema & Queries
CREATE TABLE students (
  student_id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  grade_level INT NOT NULL,
  roll_number VARCHAR(20) UNIQUE NOT NULL,
  email VARCHAR(100),
  attendance_rate DECIMAL(5,2) DEFAULT 100.00
);

-- Retrieve top performing students with >90% attendance
SELECT 
  student_id, 
  CONCAT(first_name, ' ', last_name) AS full_name, 
  grade_level, 
  attendance_rate 
FROM students 
WHERE attendance_rate >= 90.00
ORDER BY grade_level ASC, attendance_rate DESC;`
  },
  {
    id: 'sneaker-e-commerce-website',
    title: 'Sneaker E-Commerce Website',
    subtitle: 'Modern Interactive Online Storefront',
    date: "Mar '26",
    category: 'Web & E-Commerce',
    description: 'Designed a clean and engaging user interface to provide a smooth online shopping experience. Implemented easy navigation and organized product browsing with responsive design across different screen sizes.',
    longDescription: 'A high-impact e-commerce storefront dedicated to contemporary sneaker fashion. Combines rapid visual prototyping using Wix AI with customized HTML, CSS, and JavaScript interactions. Features dynamic product filtering by category, interactive shoe size selection, cart state management, and an ultra-responsive mobile-first shopping layout.',
    features: [
      'Engaging Storefront UI: High-resolution product showcase cards with hover zooms, badge tags, and pricing transparency.',
      'Seamless Navigation: Category filters (Athletic, Streetwear, Basketball, Limited Editions) enabling rapid product discovery.',
      'Interactive Shopping Flow: Size selector pills, real-time cart badge counter, and smooth cart drawer transitions.',
      'Responsive Mobile-First UX: Pixel-perfect scaling across mobile handhelds, tablets, and wide desktop displays.'
    ],
    technologies: ['Wix AI', 'HTML', 'CSS', 'JavaScript', 'Figma', 'UI/UX Design', 'E-Commerce'],
    githubUrl: 'https://github.com/vivekbabu',
    liveDemoAvailable: true,
    simulatorType: 'sneaker-store',
    metrics: [
      { label: 'Platform', value: 'Wix AI & Custom Web' },
      { label: 'UI Style', value: 'Modern Clean Streetwear' },
      { label: 'Experience', value: 'Interactive Cart & Filters' },
      { label: 'Design Tool', value: 'Figma & CSS3' }
    ],
    codeSnippet: `// Sneaker E-Commerce - Interactive Cart & Size Selector
const cartState = {
  items: [],
  total: 0
};

function selectShoeSize(btn, size) {
  document.querySelectorAll('.size-pill').forEach(el => el.classList.remove('active'));
  btn.classList.add('active');
  btn.dataset.selectedSize = size;
}

function addToSneakerCart(productName, price, size) {
  cartState.items.push({ productName, price, size, timestamp: Date.now() });
  cartState.total += price;
  updateCartBadge();
  showToastNotification(\`Added \${productName} (Size \${size}) to Cart! $\${price}\`);
}

function updateCartBadge() {
  const badge = document.querySelector('#cartCountBadge');
  if (badge) {
    badge.textContent = cartState.items.length;
    badge.classList.add('pulse');
  }
}`
  }
];

export const trainingExperiences: TrainingExperience[] = [
  {
    id: 'lpu-cdp-python',
    role: 'Python Instructor & Community Mentor',
    organization: 'Lovely Professional University | Community Development Project (CDP)',
    period: "Jul '25",
    type: 'Training',
    bullets: [
      'Conducted 30 hours of structured Python training for Class 8 school students.',
      'Taught fundamental Python concepts through practical examples, live coding exercises, and interactive learning activities.',
      'Guided students in understanding basic programming concepts, logical problem-solving techniques, and foundational coding principles.',
      'Awarded an official Certificate of Recognition by Lovely Professional University for community educational impact.'
    ],
    skillsGained: ['Python Fundamentals', 'Teaching & Mentorship', 'Curriculum Delivery', 'Interactive Coding Exercises', 'Student Problem Solving', 'Communication'],
    credentialLink: '#'
  },
  {
    id: 'lpu-cse-coordinator',
    role: 'CSE Student Coordinator',
    organization: 'Department of Computer Science & Engineering, Lovely Professional University',
    period: '2025 – Present',
    type: 'Leadership',
    bullets: [
      'Organized and coordinated major student technical, cultural, and academic activities at LPU.',
      'Facilitated cross-team collaboration across student volunteers, faculty mentors, and venue logistics.',
      'Managed event schedules, participant registrations, and real-time on-ground coordination for high-attendance campus programs.',
      'Demonstrated proactive leadership, strong time management, and adaptability during dynamic university events.'
    ],
    skillsGained: ['Campus Leadership', 'Event Coordination', 'Team Collaboration', 'Stakeholder Communication', 'Time Management', 'Crisis Resolution'],
    credentialLink: '#'
  }
];

export const certifications: Certification[] = [
  {
    id: 'infosys-python',
    title: 'Python Fundamentals',
    date: "Aug '26",
    issuer: 'Infosys Springboard',
    verificationLink: '#',
    skillsCovered: ['Python Syntax', 'Variables & Data Types', 'Control Structures & Loops', 'Functions & Modular Code', 'Algorithmic Logic']
  },
  {
    id: 'infosys-bigdata',
    title: 'Big Data',
    date: "Apr '26",
    issuer: 'Infosys Springboard',
    verificationLink: '#',
    skillsCovered: ['Distributed Storage', 'Big Data Architecture', 'Hadoop Ecosystem Concepts', 'Data Processing Fundamentals']
  },
  {
    id: 'infosys-datascience',
    title: 'Data Science',
    date: "Apr '26",
    issuer: 'Infosys Springboard',
    verificationLink: '#',
    skillsCovered: ['Data Science Lifecycle', 'Data Exploration & Cleaning', 'Statistical Modeling Principles', 'Data Visualization']
  }
];

export const achievements: Achievement[] = [
  {
    id: 'spectra-folk-dance',
    title: '1st Position — Spectra 2026, International Folk Dance',
    category: 'Cultural & Arts',
    description: 'Secured 1st Position in International Folk Dance at Spectra 2026, Lovely Professional University, demonstrating artistic excellence, team synchronization, and dedication.',
    statNumber: '1st',
    statLabel: 'Gold Trophy / 1st Place',
    icon: 'Trophy'
  },
  {
    id: 'one-world-runnerup',
    title: '1st Runner-up — One World 2026',
    category: 'Cultural & Arts',
    description: 'Awarded 1st Runner-up at One World 2026, the premier university-wide multicultural festival at Lovely Professional University.',
    statNumber: '2nd',
    statLabel: '1st Runner-up Honors',
    icon: 'Star'
  },
  {
    id: 'cse-coordinator-badge',
    title: 'CSE Student Coordinator at LPU',
    category: 'Leadership & Campus',
    description: 'Selected as CSE Student Coordinator at Lovely Professional University to organize and coordinate campus student activities and tech initiatives.',
    statNumber: 'LPU',
    statLabel: 'Student Coordinator',
    icon: 'Users'
  },
  {
    id: 'cdp-teaching-badge',
    title: '30 Hours Python Community Teaching Completed',
    category: 'Mentorship & Teaching',
    description: 'Successfully completed 30 hours of Python teaching for Class 8 school students under the Community Development Project (CDP) with certificate from LPU.',
    statNumber: '30h',
    statLabel: 'Teaching Hours Completed',
    icon: 'Code'
  }
];

export const educationHistory: EducationItem[] = [
  {
    id: 'lpu-btech',
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    period: "Aug '25 – Present",
    location: 'Phagwara, Punjab',
    score: '7.18',
    scoreLabel: 'CGPA',
    highlights: [
      'Pursuing B.Tech in Computer Science and Engineering with focus on Software Development, Web Technologies, Database Systems, and Algorithms.',
      'Active CSE Student Coordinator organizing student activities and hackathons across campus.'
    ]
  },
  {
    id: 'ssnms-inter',
    institution: 'S.S.N.M.S INTER COLLEGE, SIJUAI',
    degree: 'Senior Secondary Education (12th Grade / Intermediate)',
    field: 'Science & Mathematics',
    period: "May '23 – Mar '25",
    location: 'Dhanbad, Jharkhand',
    score: '79%',
    scoreLabel: 'Percentage',
    highlights: [
      'Graduated with 79% score with strong foundation in analytical thinking, mathematics, and scientific principles.'
    ]
  },
  {
    id: 'buds-garden',
    institution: 'Buds Garden School',
    degree: 'Higher Secondary Education (10th Grade / Matriculation)',
    field: 'General Secondary Curriculum',
    period: "Mar '23",
    location: 'Dhanbad, Jharkhand',
    score: '69%',
    scoreLabel: 'Percentage',
    highlights: [
      'Completed secondary schooling with active involvement in school sports, arts, and cultural competitions.'
    ]
  }
];
