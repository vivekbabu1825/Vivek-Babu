import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  ExternalLink, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Check, 
  Copy,
  MapPin,
  Calendar,
  FileText
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  profilePhoto?: string | null;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, darkMode, profilePhoto }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyAll = () => {
    const resumeText = `Anshuman Choubey
LinkedIn: ${personalInfo.linkedin} | Email: ${personalInfo.email}
GitHub: ${personalInfo.github} | Mobile: ${personalInfo.phone}

SKILLS SUMMARY:
Languages: Python, C, C++, SQL
Big Data: Hadoop
Data Visualization: MS Excel
Tools & Platforms: Git, GitHub, MySQL, Figma
Machine Learning: Pandas, NumPy

PROJECTS:
Arduino-Based Smart Classroom Noise Monitoring System | GitHub (Oct '25)
• Intelligent Noise Monitoring: Monitors classroom noise levels using a sound sensor and evaluates noise based on the number of students present.
• Occupancy Detection: Uses IR sensors to detect students entering and leaving the classroom and calculate occupancy.
• Real-Time Monitoring: Processes sensor data using an Arduino microcontroller and displays classroom noise/status through a 16×2 LCD and LED indicators.

TRAINING EXPERIENCE:
Python Programming Training | Certificate (Jun' 2026 – Jul' 26)
• Learned Python fundamentals, data types, operators, functions, OOP, and exception handling.
• Developed and practiced multiple Python programs and problem-solving exercises.
• Gained hands-on experience in debugging, coding, and implementing basic algorithms.

CERTIFICATIONS:
• Python Programming Certification | Link (Nov '25)
• C Programming Certification | Link (Apr '26)
• Data Structures & Algorithms Certification | Link (May '26)

ACHIEVEMENTS:
• Solved 10+ DSA problems on LeetCode and other coding platforms.
• Organized 5+ campus events with Student Organization DAC, showcasing leadership & coordination skills.

EDUCATION:
• Lovely Professional University (Phagwara, Punjab)
  Bachelor of Technology in Computer Science and Engineering; CGPA: 6.00 (Aug' 25 – Present)
• S S N M S INTER COLLEGE, Dhanbad, Jharkhand
  Intermediate (PCM); Percentage: 77.00% (Apr' 23 – Mar' 25)
• St. Thomas High School, Dhanbad, Jharkhand
  Matriculation; Percentage: 63.00% (Apr' 21 – Mar' 23)
`;
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white text-slate-900 border border-slate-300 shadow-2xl overflow-hidden my-4">
        
        {/* Modal Controls Topbar (Non-printable) */}
        <div className="print:hidden flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-sm sm:text-base">Anshuman Choubey — Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              title="Copy plain text CV"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-white shadow transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div 
          id="printable-resume" 
          className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible font-sans text-slate-900 bg-white"
        >
          {/* Header */}
          <div className="border-b border-slate-300 pb-5 mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-800 mb-2">
                Anshuman Choubey
              </h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs sm:text-sm text-slate-800">
                <div>
                  <span className="font-semibold text-slate-900">LinkedIn: </span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                    www.linkedin.com/in/anshuman-choubey-cse/
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Email: </span>
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-700 hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Github: </span>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                    https://github.com/anshumanchoubey917
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Mobile: </span>
                  <span className="font-mono text-slate-900">{personalInfo.phoneDisplay}</span>
                </div>
              </div>
            </div>

            {profilePhoto && (
              <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden border-2 border-slate-300 shadow-sm shrink-0 bg-slate-100 flex items-center justify-center">
                <img 
                  src={profilePhoto} 
                  alt="Anshuman Choubey" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>

          {/* Section: SKILLS SUMMARY */}
          <div className="mb-5">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-0.5 mb-2">
              Skills Summary
            </h2>
            <div className="space-y-1 text-xs sm:text-sm text-slate-800">
              <div>
                <strong className="font-bold text-slate-900">Languages: </strong>
                Python, C, C++, SQL
              </div>
              <div>
                <strong className="font-bold text-slate-900">Big Data: </strong>
                Hadoop
              </div>
              <div>
                <strong className="font-bold text-slate-900">Data Visualization: </strong>
                MS Excel
              </div>
              <div>
                <strong className="font-bold text-slate-900">Tools & Platforms: </strong>
                Git, GitHub, MySQL, Figma
              </div>
              <div>
                <strong className="font-bold text-slate-900">Machine Learning: </strong>
                Pandas, NumPy
              </div>
            </div>
          </div>

          {/* Section: PROJECTS */}
          <div className="mb-5">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-0.5 mb-2">
              Projects
            </h2>
            
            <div className="space-y-3">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <div>
                    <strong className="font-bold text-slate-900">
                      Arduino-Based Smart Classroom Noise Monitoring System
                    </strong>
                    <span className="text-slate-700 font-normal"> | </span>
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">GitHub</a>
                  </div>
                  <span className="text-slate-700 font-medium sm:text-right font-mono text-xs">Oct '25</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-800 mt-1">
                  <li>
                    <strong className="font-semibold text-slate-900">Intelligent Noise Monitoring: </strong>
                    Monitors classroom noise levels using a sound sensor and evaluates noise based on the number of students present.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">Occupancy Detection: </strong>
                    Uses IR sensors to detect students entering and leaving the classroom and calculate occupancy.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">Real-Time Monitoring: </strong>
                    Processes sensor data using an Arduino microcontroller and displays classroom noise/status through a 16×2 LCD and LED indicators.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: TRAINING EXPERIENCE */}
          <div className="mb-5">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-0.5 mb-2">
              Training Experience
            </h2>

            <div className="space-y-3">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <div>
                    <strong className="font-bold text-slate-900">Python Programming Training</strong>
                    <span className="text-slate-700 font-normal"> | </span>
                    <span className="text-blue-700">Certificate</span>
                  </div>
                  <span className="text-slate-700 font-medium sm:text-right font-mono text-xs">Jun' 2026 – Jul' 26</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-800 mt-1">
                  <li>Learned Python fundamentals, data types, operators, functions, OOP, and exception handling.</li>
                  <li>Developed and practiced multiple Python programs and problem-solving exercises.</li>
                  <li>Gained hands-on experience in debugging, coding, and implementing basic algorithms.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: CERTIFICATIONS */}
          <div className="mb-5">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-0.5 mb-2">
              Certifications
            </h2>

            <div className="space-y-1.5 text-xs sm:text-sm text-slate-800">
              <div className="flex justify-between items-center">
                <span>• Python Programming Certification | <span className="text-blue-700 hover:underline">Link</span></span>
                <span className="font-mono text-slate-700 text-xs">Nov '25</span>
              </div>
              <div className="flex justify-between items-center">
                <span>• C Programming Certification | <span className="text-blue-700 hover:underline">Link</span></span>
                <span className="font-mono text-slate-700 text-xs">Apr '26</span>
              </div>
              <div className="flex justify-between items-center">
                <span>• Data Structures & Algorithms Certification | <span className="text-blue-700 hover:underline">Link</span></span>
                <span className="font-mono text-slate-700 text-xs">May '26</span>
              </div>
            </div>
          </div>

          {/* Section: ACHIEVEMENTS */}
          <div className="mb-5">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-0.5 mb-2">
              Achievements
            </h2>

            <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-800">
              <li>Solved 10+ DSA problems on LeetCode and other coding platforms.</li>
              <li>Organized 5+ campus events with Student Organization DAC, showcasing leadership & coordination skills.</li>
            </ul>
          </div>

          {/* Section: EDUCATION */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-0.5 mb-2">
              Education
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-slate-800">
              <div>
                <div className="flex justify-between font-bold">
                  <span>Lovely Professional University</span>
                  <span className="font-normal text-slate-700">Phagwara, Punjab</span>
                </div>
                <div className="flex justify-between text-slate-800">
                  <span>Bachelor of Technology; Computer Science and Engineering; CGPA: 6.00</span>
                  <span className="font-mono text-xs text-slate-700">Aug' 25 – Present</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>S S N M S INTER COLLEGE,</span>
                  <span className="font-normal text-slate-700">Dhanbad, Jharkhand</span>
                </div>
                <div className="flex justify-between text-slate-800">
                  <span>Intermediate; PCM; Percentage: 77.00</span>
                  <span className="font-mono text-xs text-slate-700">Apr' 23 – Mar' 25</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>St. Thomas High School</span>
                  <span className="font-normal text-slate-700">Dhanbad, Jharkhand</span>
                </div>
                <div className="flex justify-between text-slate-800">
                  <span>Matriculation; Percentage: 63.00</span>
                  <span className="font-mono text-xs text-slate-700">Apr' 21 – Mar' 23</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

