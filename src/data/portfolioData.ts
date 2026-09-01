import { Project, SkillCategory, TrainingExperience, Certification, EducationItem, Achievement } from '../types';

export const personalInfo = {
  name: 'Anshuman Choubey',
  role: 'Computer Science Undergraduate & Software Developer',
  headline: 'B.Tech CSE Student | Python, C/C++, SQL, Big Data (Hadoop), ML (Pandas, NumPy) & Embedded IoT',
  bio: 'Computer Science and Engineering undergraduate at Lovely Professional University. Passionate about software development, machine learning data workflows, and embedded IoT systems. Builder of the Arduino-Based Smart Classroom Noise Monitoring System, with strong foundations in Python, C/C++, SQL, Big Data (Hadoop), Pandas, and NumPy. Proven campus organizer having led 5+ university events with Student Organization DAC.',
  email: 'anshumanchoubey917@gmail.com',
  phone: '+91 62043 87991',
  phoneDisplay: '+91 62043 87991',
  location: 'Phagwara, Punjab / Dhanbad, Jharkhand, India',
  github: 'https://github.com/anshumanchoubey917',
  githubUsername: 'anshumanchoubey917',
  linkedin: 'https://www.linkedin.com/in/anshuman-choubey-cse/',
  linkedinUsername: 'anshuman-choubey-cse',
  status: 'Open to Software Engineering, Python & IoT Internships',
  availableFor: ['Python & C/C++ Development', 'Embedded IoT Systems (Arduino)', 'Data Analytics & ML (Pandas, NumPy)', 'Database Systems & SQL (MySQL)', 'Big Data (Hadoop)'],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    categoryKey: 'languages',
    description: 'Core languages used for systems programming, data algorithms, embedded hardware, and database querying.',
    skills: [
      { name: 'Python', level: 'Advanced', percentage: 90, description: 'OOP, scripting, algorithms, exception handling, data science workflows' },
      { name: 'C', level: 'Proficient', percentage: 85, description: 'Procedural programming, pointers, memory management, embedded logic' },
      { name: 'C++', level: 'Proficient', percentage: 82, description: 'Object-oriented programming, STL, algorithmic problem solving' },
      { name: 'SQL', level: 'Proficient', percentage: 85, description: 'Relational querying, schema design, table joins, data manipulation' }
    ]
  },
  {
    title: 'Machine Learning & Big Data',
    categoryKey: 'mlBigData',
    description: 'Data manipulation, scientific computing, distributed architectures, and tabular analytics.',
    skills: [
      { name: 'Pandas', level: 'Advanced', percentage: 88, description: 'DataFrame wrangling, filtering, aggregation, time-series operations' },
      { name: 'NumPy', level: 'Advanced', percentage: 86, description: 'Multi-dimensional arrays, mathematical transforms, vectorization' },
      { name: 'Hadoop', level: 'Proficient', percentage: 80, description: 'Big Data ecosystem, distributed storage, MapReduce processing principles' },
      { name: 'MS Excel', level: 'Advanced', percentage: 88, description: 'Data visualization, pivot tables, lookup formulas, statistical charts' }
    ]
  },
  {
    title: 'Tools & Platforms',
    categoryKey: 'databaseTools',
    description: 'Version control, database management systems, design prototyping, and hardware tooling.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', percentage: 88, description: 'Repository management, branching, commits, version tracking' },
      { name: 'MySQL', level: 'Proficient', percentage: 84, description: 'Relational database administration, normalization, indexing, CRUD' },
      { name: 'Figma', level: 'Proficient', percentage: 80, description: 'UI wireframing, component layouts, user experience flow design' },
      { name: 'Arduino & Embedded IoT', level: 'Advanced', percentage: 86, description: 'Microcontroller programming, IR sensors, sound sensors, 16x2 LCD, circuit prototyping' }
    ]
  },
  {
    title: 'Core Competencies & DSA',
    categoryKey: 'coreDsa',
    description: 'Algorithmic logic, data structures, and verified technical certifications.',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Proficient', percentage: 82, description: 'Arrays, Linked Lists, Stacks, Queues, Searching, Sorting (10+ LeetCode solved)' },
      { name: 'Object-Oriented Programming (OOP)', level: 'Advanced', percentage: 88, description: 'Classes, inheritance, polymorphism, encapsulation in Python and C++' },
      { name: 'Debugging & Code Optimization', level: 'Advanced', percentage: 86, description: 'Traceback analysis, unit testing, logic verification, syntax debugging' }
    ]
  },
  {
    title: 'Leadership & Professional Skills',
    categoryKey: 'softSkills',
    description: 'Campus leadership, event management, and collaborative execution abilities.',
    skills: [
      { name: 'Event Management & Coordination', level: 'Advanced', percentage: 92, description: 'Organized 5+ campus events with Student Organization DAC at LPU' },
      { name: 'Team Leadership & Collaboration', level: 'Advanced', percentage: 90, description: 'Guiding volunteers, managing schedules, and driving cross-functional goals' },
      { name: 'Problem Solving & Critical Thinking', level: 'Advanced', percentage: 88, description: 'Logical diagnosis of hardware sensors, data pipelines, and algorithms' },
      { name: 'Technical Communication', level: 'Advanced', percentage: 88, description: 'Clear presentation of engineering concepts, documentation, and stakeholder interaction' }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'arduino-smart-classroom-noise-monitoring',
    title: 'Arduino-Based Smart Classroom Noise Monitoring System',
    subtitle: 'IoT-Driven Acoustic & Occupancy Analytics System',
    date: "Oct '25",
    category: 'IoT & Embedded Systems',
    description: 'Monitors classroom noise levels using a sound sensor and evaluates noise based on the number of students present. Uses IR sensors to detect student entrance/exit and displays status via a 16×2 LCD and LED indicators.',
    longDescription: 'An intelligent embedded IoT system engineered using Arduino to maintain optimal classroom acoustic environments. The system features dual infrared (IR) sensors at doorways to automatically compute bidirectional classroom occupancy in real time. An analog sound sensor continuously samples ambient decibel levels and dynamically assesses noise violations relative to current student occupancy. The status is output instantaneously to a 16×2 LCD screen and visual LED warning indicators (Green = Quiet/Optimal, Yellow = Warning, Red = Noise Limit Exceeded with buzzer alert).',
    features: [
      'Intelligent Noise Monitoring: Continuously evaluates ambient noise levels using an analog sound sensor and computes dynamic acoustic thresholds based on student count.',
      'Bidirectional Occupancy Detection: Employs dual IR beam break sensors to accurately detect students entering and leaving the classroom, maintaining live headcounts.',
      'Real-Time Microcontroller Processing: Processes sensor signals on an Arduino microcontroller with immediate refresh rates.',
      'Visual Feedback & Alerts: Displays live status on a 16×2 LCD display with multi-tier LED status indicators and threshold warning triggers.'
    ],
    technologies: ['Arduino C/C++', 'Embedded C', 'Sound Sensor (dB)', 'IR Sensors', '16x2 LCD Display', 'LED Status Indicators', 'Circuit Design', 'IoT Hardware', 'Git'],
    githubUrl: 'https://github.com/anshumanchoubey917',
    liveDemoAvailable: true,
    simulatorType: 'arduino-smart-classroom',
    metrics: [
      { label: 'Hardware', value: 'Arduino Microcontroller' },
      { label: 'Sensors', value: 'Sound dB & Dual IR' },
      { label: 'Display', value: '16x2 I2C LCD & LEDs' },
      { label: 'Processing', value: 'Real-Time Embedded' }
    ],
    codeSnippet: `// Arduino-Based Smart Classroom Noise Monitoring System
#include <LiquidCrystal.h>

const int soundPin = A0;      // Analog Sound Sensor
const int irInPin = 2;        // IR Sensor 1 (Entry)
const int irOutPin = 3;       // IR Sensor 2 (Exit)
const int ledGreen = 8;       // Normal Level
const int ledYellow = 9;      // Moderate Warning
const int ledRed = 10;        // Noise Limit Exceeded
const int buzzerPin = 11;     // Warning Buzzer

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
int studentCount = 0;
int soundLevel = 0;

void setup() {
  pinMode(irInPin, INPUT);
  pinMode(irOutPin, INPUT);
  pinMode(ledGreen, OUTPUT);
  pinMode(ledYellow, OUTPUT);
  pinMode(ledRed, OUTPUT);
  pinMode(buzzerPin, OUTPUT);
  
  lcd.begin(16, 2);
  lcd.print("Smart Classroom");
  lcd.setCursor(0, 1);
  lcd.print("System Ready...");
  delay(1500);
}

void loop() {
  // Read Occupancy
  if (digitalRead(irInPin) == LOW) {
    studentCount++;
    delay(250); // Debounce
  }
  if (digitalRead(irOutPin) == LOW && studentCount > 0) {
    studentCount--;
    delay(250);
  }

  // Read Sound Level (dB)
  soundLevel = analogRead(soundPin) / 10;
  int dynamicLimit = 40 + (studentCount * 1.5);

  // Status Evaluation & LED Indication
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Students: " + String(studentCount));
  lcd.setCursor(0, 1);

  if (soundLevel < dynamicLimit) {
    digitalWrite(ledGreen, HIGH);
    digitalWrite(ledYellow, LOW);
    digitalWrite(ledRed, LOW);
    lcd.print("Status: QUIET");
  } else if (soundLevel < dynamicLimit + 15) {
    digitalWrite(ledGreen, LOW);
    digitalWrite(ledYellow, HIGH);
    digitalWrite(ledRed, LOW);
    lcd.print("Status: MODERATE");
  } else {
    digitalWrite(ledGreen, LOW);
    digitalWrite(ledYellow, LOW);
    digitalWrite(ledRed, HIGH);
    lcd.print("Status: NOISY!");
  }
  delay(300);
}`
  },
  {
    id: 'python-data-analytics-ml-pipeline',
    title: 'Python Data Analytics & ML Insights Pipeline',
    subtitle: 'Automated Data Wrangling, Pandas/NumPy Analysis & Excel Reporting',
    date: "2026",
    category: 'Data Science & ML',
    description: 'Engineered an automated data manipulation and exploratory data analysis pipeline utilizing Python, Pandas, and NumPy. Features correlation analysis, anomaly detection, and automated reporting exported to MS Excel.',
    longDescription: 'A modular data science pipeline designed for high-performance tabular data ingestion, cleaning, and statistical exploration. Leverages Pandas vectorization for rapid filtering and transformation of multi-attribute records, coupled with NumPy numerical matrices for variance and correlation modeling. Outputs visual charts and formatted MS Excel executive summaries.',
    features: [
      'Automated Data Wrangling: Handles missing values, type coercions, and standardizes multi-column datasets using Pandas.',
      'High-Speed Numerical Processing: Executes numerical linear transformations and summary statistics using NumPy arrays.',
      'Data Visualization & Reporting: Generates clean statistical reports and spreadsheet workbooks integrated with MS Excel.',
      'Outlier Detection: Implements statistical IQR and Z-score routines to flag numerical anomalies in real time.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'MS Excel', 'Data Cleaning', 'Statistical Modeling', 'Git'],
    githubUrl: 'https://github.com/anshumanchoubey917',
    liveDemoAvailable: true,
    simulatorType: 'python-data-ml',
    metrics: [
      { label: 'Data Engine', value: 'Pandas & NumPy' },
      { label: 'Analytics', value: 'Exploratory & Summary' },
      { label: 'Export Format', value: 'MS Excel / CSV' },
      { label: 'Paradigm', value: 'Vectorized Python' }
    ],
    codeSnippet: `# Python Data Analytics & Statistical Exploration Pipeline
import pandas as pd
import numpy as np

def process_classroom_analytics(dataset_path: str):
    # Load dataset
    df = pd.read_csv(dataset_path)
    
    # Clean & Impute missing values
    df.fillna({'noise_db': df['noise_db'].median(), 'occupancy': 0}, inplace=True)
    
    # NumPy vectorized metric calculation
    noise_array = np.array(df['noise_db'])
    mean_noise = np.mean(noise_array)
    std_noise = np.std(noise_array)
    
    # Statistical anomaly detection (Z-score > 2.0)
    df['is_anomaly'] = np.abs((noise_array - mean_noise) / std_noise) > 2.0
    
    # Grouped Summary
    summary = df.groupby('hour_of_day').agg(
        avg_occupancy=('occupancy', 'mean'),
        peak_noise=('noise_db', 'max'),
        anomaly_count=('is_anomaly', 'sum')
    ).reset_index()
    
    # Export report to MS Excel
    summary.to_excel('classroom_acoustic_report.xlsx', index=False)
    print("✅ Analytics Summary Successfully Generated!")
    return summary`
  },
  {
    id: 'hadoop-sql-database-management-system',
    title: 'Hadoop Big Data & MySQL Management System',
    subtitle: 'Distributed Data Storage Simulation & Normalized Relational Database',
    date: "2026",
    category: 'Big Data & SQL',
    description: 'Designed a scalable database and data processing framework leveraging MySQL for relational consistency and simulating Hadoop MapReduce workflows for distributed big data queries.',
    longDescription: 'Created to manage large-scale academic and operational datasets, this system integrates relational MySQL tables normalized to 3NF with conceptual distributed Big Data Hadoop ingestion patterns. Features robust SQL queries, indexing strategies, and automated data aggregation.',
    features: [
      'Normalized Relational Architecture: Third Normal Form (3NF) relational MySQL schema ensuring data integrity and zero redundancy.',
      'Optimized SQL Queries: Structured indexing, multi-table joins, and aggregate functions for fast data retrieval.',
      'Big Data Integration: Simulated Hadoop batch processing architecture for handling large-scale analytics data.',
      'Reliable Transactions: ACID-compliant queries for transaction durability and error rollbacks.'
    ],
    technologies: ['SQL', 'MySQL', 'Hadoop', 'Big Data', 'Database Normalization', 'Relational Schema', 'Git'],
    githubUrl: 'https://github.com/anshumanchoubey917',
    liveDemoAvailable: true,
    simulatorType: 'hadoop-sql-mgmt',
    metrics: [
      { label: 'Database', value: 'MySQL & Relational SQL' },
      { label: 'Big Data', value: 'Hadoop Concepts' },
      { label: 'Integrity', value: 'ACID Compliant 3NF' },
      { label: 'Tooling', value: 'MySQL & Git' }
    ],
    codeSnippet: `-- MySQL Relational Schema for Sensor & Campus Records
CREATE TABLE classroom_nodes (
  node_id INT PRIMARY KEY AUTO_INCREMENT,
  room_number VARCHAR(20) NOT NULL,
  sensor_type VARCHAR(50) DEFAULT 'Arduino_Acoustic_IR',
  max_capacity INT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE acoustic_logs (
  log_id BIGINT PRIMARY KEY AUTO_INCREMENT,
  node_id INT,
  occupancy_count INT NOT NULL,
  sound_level_db DECIMAL(5,2) NOT NULL,
  recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (node_id) REFERENCES classroom_nodes(node_id)
);

-- Query: Retrieve Peak Noise Hours across Active Nodes
SELECT 
  c.room_number,
  AVG(a.sound_level_db) AS avg_noise,
  MAX(a.sound_level_db) AS peak_noise,
  MAX(a.occupancy_count) AS max_students
FROM classroom_nodes c
JOIN acoustic_logs a ON c.node_id = a.node_id
WHERE a.recorded_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
GROUP BY c.room_number
ORDER BY peak_noise DESC;`
  }
];

export const trainingExperiences: TrainingExperience[] = [
  {
    id: 'python-programming-training',
    role: 'Python Programming Trainee',
    organization: 'Python Programming Training Program',
    period: "Jun' 2026 – Jul' 26",
    type: 'Training',
    bullets: [
      'Learned Python fundamentals, comprehensive data types, operators, functions, OOP principles, and exception handling.',
      'Developed and practiced multiple Python programs, algorithmic challenges, and problem-solving exercises.',
      'Gained hands-on experience in debugging, efficient code writing, and implementing foundational algorithms.',
      'Awarded an official Certificate of Completion validating practical Python programming competencies.'
    ],
    skillsGained: ['Python Fundamentals', 'Object-Oriented Programming (OOP)', 'Exception Handling', 'Debugging & Code Optimization', 'Algorithm Design', 'Problem Solving'],
    credentialLink: '#'
  },
  {
    id: 'dac-student-coordinator',
    role: 'Event Coordinator & Campus Leader',
    organization: 'Student Organization DAC | Lovely Professional University',
    period: '2025 – Present',
    type: 'Leadership',
    bullets: [
      'Organized 5+ major campus events with Student Organization DAC, showcasing exemplary leadership and coordination skills.',
      'Managed end-to-end event logistics, student registrations, speaker coordination, and on-stage execution.',
      'Led cross-functional teams of student volunteers to ensure seamless operations for high-footfall university gatherings.',
      'Demonstrated proactive leadership, strong communication, and adaptability during dynamic university programs.'
    ],
    skillsGained: ['Event Management', 'Campus Leadership', 'Cross-Functional Teamwork', 'Logistics Planning', 'Public Communication', 'Problem Solving'],
    credentialLink: '#'
  }
];

export const certifications: Certification[] = [
  {
    id: 'cert-python',
    title: 'Python Programming Certification',
    date: "Nov '25",
    issuer: 'Professional Certification Authority',
    verificationLink: '#',
    skillsCovered: ['Python Core Syntax', 'Data Types & Control Flow', 'Functions & Modular Code', 'OOP Fundamentals', 'Exception Handling']
  },
  {
    id: 'cert-c',
    title: 'C Programming Certification',
    date: "Apr '26",
    issuer: 'Professional Certification Authority',
    verificationLink: '#',
    skillsCovered: ['Procedural Programming', 'Pointers & Memory Architecture', 'Arrays & Strings', 'File I/O', 'Algorithm Implementation']
  },
  {
    id: 'cert-dsa',
    title: 'Data Structures & Algorithms Certification',
    date: "May '26",
    issuer: 'Professional Certification Authority',
    verificationLink: '#',
    skillsCovered: ['Arrays & Linked Lists', 'Stacks & Queues', 'Trees & Binary Search', 'Sorting & Searching Algorithms', 'Time & Space Complexity']
  }
];

export const achievements: Achievement[] = [
  {
    id: 'dsa-leetcode-badge',
    title: '10+ DSA Problems Solved on LeetCode & Coding Platforms',
    category: 'Competitive Programming & DSA',
    description: 'Solved 10+ Data Structures and Algorithms problems across LeetCode and programming platforms, demonstrating consistent problem-solving practice.',
    statNumber: '10+',
    statLabel: 'DSA Problems Solved',
    icon: 'Code'
  },
  {
    id: 'dac-events-badge',
    title: 'Organized 5+ Campus Events with Student Organization DAC',
    category: 'Leadership & Campus Impact',
    description: 'Successfully organized and coordinated 5+ major campus events with Student Organization DAC at Lovely Professional University, leading volunteer teams and event operations.',
    statNumber: '5+',
    statLabel: 'Campus Events Led',
    icon: 'Users'
  },
  {
    id: 'arduino-smart-classroom-badge',
    title: 'Engineered Arduino Smart Classroom Acoustic System',
    category: 'Embedded IoT Innovation',
    description: 'Designed and implemented an Arduino-based intelligent noise and occupancy monitoring hardware system with dual IR sensors and 16x2 LCD display.',
    statNumber: 'IoT',
    statLabel: 'Hardware Innovation',
    icon: 'Cpu'
  },
  {
    id: 'python-training-badge',
    title: 'Certified Python Programming Training Completion',
    category: 'Technical Training',
    description: 'Completed comprehensive Python programming training covering OOP, exception handling, algorithmic problem solving, and hands-on debugging.',
    statNumber: '100%',
    statLabel: 'Training Certified',
    icon: 'Award'
  }
];

export const educationHistory: EducationItem[] = [
  {
    id: 'lpu-btech',
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    period: "Aug' 25 – Present",
    location: 'Phagwara, Punjab',
    score: '6.00',
    scoreLabel: 'CGPA',
    highlights: [
      'Pursuing B.Tech in Computer Science and Engineering with focus on Programming (Python, C, C++), Data Structures, Database Systems (SQL), Big Data (Hadoop), and IoT.',
      'Active event coordinator with Student Organization DAC organizing university-wide technical and cultural programs.'
    ]
  },
  {
    id: 'ssnms-inter',
    institution: 'S S N M S INTER COLLEGE',
    degree: 'Intermediate (12th Grade)',
    field: 'Physics, Chemistry & Mathematics (PCM)',
    period: "Apr' 23 – Mar' 25",
    location: 'Dhanbad, Jharkhand',
    score: '77.00%',
    scoreLabel: 'Percentage',
    highlights: [
      'Graduated with 77.00% in PCM, developing strong quantitative analysis, scientific methodology, and mathematical problem-solving skills.'
    ]
  },
  {
    id: 'st-thomas-matric',
    institution: 'St. Thomas High School',
    degree: 'Matriculation (10th Grade)',
    field: 'General Secondary Curriculum',
    period: "Apr' 21 – Mar' 23",
    location: 'Dhanbad, Jharkhand',
    score: '63.00%',
    scoreLabel: 'Percentage',
    highlights: [
      'Completed secondary education with active participation in science exhibitions, school academic events, and extracurricular activities.'
    ]
  }
];

