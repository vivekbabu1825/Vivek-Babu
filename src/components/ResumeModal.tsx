import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
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
    const resumeText = `VIVEK BABU
LinkedIn: ${personalInfo.linkedin} | Email: ${personalInfo.email}
GitHub: ${personalInfo.github} | Mobile: ${personalInfo.phone}
Location: ${personalInfo.location}

SKILLS SUMMARY:
• Programming Languages: JavaScript, Python, C++, C
• Web & Frontend: HTML/HTML5, CSS/CSS3, Wix AI, Client-Side Validation, Responsive Design
• Databases & Tools: MySQL, SQL, Git, GitHub, Figma, VS Code
• Infosys Springboard Certifications: Python Fundamentals, Big Data, Data Science
• Soft Skills: Problem Solving, Teaching & Mentorship, Team Collaboration, Event Coordination

PROJECTS:
1. Login Credential Page (Builtstrom Hackathon Winner / Project) | Feb '26
• Developed responsive login interface with client-side form validation using HTML, CSS, and JavaScript.
• Implemented Regex-based email sanitization, password entropy verification, and instant UX error states.

2. School Management System | May '26
• Developed a web-based School Management System with relational MySQL database architecture to digitally manage student and school-related records.
• Created intuitive administrative dashboard for enrollment, attendance tracking, and gradebook management.

3. Sneaker E-Commerce Website | Mar '26
• Designed a clean and engaging storefront UI with seamless navigation and interactive product filtering.
• Prototyped using Wix AI with customized HTML/CSS/JS for interactive shopping cart and size selector.

PRACTICAL EXPERIENCE & LEADERSHIP:
• Python Instructor & Community Mentor | Lovely Professional University (CDP) | Jul '25
  - Conducted 30 hours of structured Python training for Class 8 school students.
  - Taught core syntax, loops, and problem solving; awarded Certificate of Recognition by LPU.
• CSE Student Coordinator | Lovely Professional University | 2025 – Present
  - Coordinated student technical and academic events, managing logistical workflows and volunteers.

CERTIFICATIONS:
• Python Fundamentals — Infosys Springboard (Aug '26)
• Big Data — Infosys Springboard (Apr '26)
• Data Science — Infosys Springboard (Apr '26)

ACHIEVEMENTS:
• 1st Position — Spectra 2026, International Folk Dance, Lovely Professional University
• 1st Runner-up — One World 2026, Lovely Professional University
• CSE Student Coordinator at LPU
• 30 Hours Python Community Teaching Completed (Certificate from LPU)

EDUCATION:
• Lovely Professional University (Phagwara, Punjab) - B.Tech CSE (Aug '25 – Present) | CGPA: 7.18
• S.S.N.M.S INTER COLLEGE, SIJUAI (Dhanbad, Jharkhand) - Intermediate (May '23 – Mar '25) | Percentage: 79%
• Buds Garden School (Dhanbad, Jharkhand) - Matriculation (Mar '23) | Percentage: 69%
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
            <span className="font-bold text-sm sm:text-base">Vivek Babu — Curriculum Vitae</span>
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
          <div className="border-b-2 border-slate-800 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-900 mb-2">
                Vivek Babu
              </h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs sm:text-sm text-slate-700">
                <div>
                  <span className="font-semibold">LinkedIn: </span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                    {personalInfo.linkedin}
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Email: </span>
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-700 hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <span className="font-semibold">GitHub: </span>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                    {personalInfo.github}
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Mobile: </span>
                  <span className="font-mono">{personalInfo.phoneDisplay}</span>
                </div>
              </div>
            </div>

            {profilePhoto && (
              <div className="shrink-0">
                <img
                  src={profilePhoto}
                  alt="Vivek Babu Profile"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border-2 border-slate-300 shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>

          {/* Section: SKILLS SUMMARY */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 border-b border-slate-300 pb-1 mb-2.5">
              Skills Summary
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm text-slate-800">
              <div>
                <strong className="font-semibold text-slate-900">Languages: </strong>
                JavaScript, Python, C++, C
              </div>
              <div>
                <strong className="font-semibold text-slate-900">Web & Frontend: </strong>
                HTML5, CSS3, Wix AI, Client-Side Validation
              </div>
              <div>
                <strong className="font-semibold text-slate-900">Databases & Tools: </strong>
                MySQL, SQL, Git, GitHub, Figma, VS Code
              </div>
              <div>
                <strong className="font-semibold text-slate-900">Infosys Certifications: </strong>
                Python Fundamentals, Big Data, Data Science
              </div>
              <div className="sm:col-span-2">
                <strong className="font-semibold text-slate-900">Soft Skills & Leadership: </strong>
                Problem Solving, Teaching & Mentorship (30h CDP), Team Collaboration, Event Coordination
              </div>
            </div>
          </div>

          {/* Section: PROJECTS */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 border-b border-slate-300 pb-1 mb-2.5">
              Projects
            </h2>
            
            <div className="space-y-3.5">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold">
                  <span className="text-slate-900">
                    Login Credential Page (Builtstrom Hackathon) | <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-blue-700 font-normal hover:underline">GitHub</a>
                  </span>
                  <span className="text-slate-600 font-normal sm:text-right font-mono">Feb '26</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 mt-1">
                  <li>Developed responsive login credential interface with real-time client-side form validation using HTML, CSS, and JavaScript.</li>
                  <li>Engineered email Regex sanitization, password entropy verification, and dynamic visual status feedback.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold">
                  <span className="text-slate-900">
                    School Management System | <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-blue-700 font-normal hover:underline">GitHub</a>
                  </span>
                  <span className="text-slate-600 font-normal sm:text-right font-mono">May '26</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 mt-1">
                  <li>Developed a web-based School Management System with relational MySQL database architecture to digitally manage student and school-related records.</li>
                  <li>Created administrative dashboard for enrollment, attendance tracking, and gradebook management with zero data redundancy.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold">
                  <span className="text-slate-900">
                    Sneaker E-Commerce Website | <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-blue-700 font-normal hover:underline">GitHub</a>
                  </span>
                  <span className="text-slate-600 font-normal sm:text-right font-mono">Mar '26</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 mt-1">
                  <li>Designed a clean and engaging storefront UI with seamless category navigation, shoe size selection, and responsive layout across devices.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: TRAINING EXPERIENCE */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 border-b border-slate-300 pb-1 mb-2.5">
              Practical Experience & Leadership
            </h2>

            <div className="space-y-3">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold">
                  <span className="text-slate-900">
                    Python Instructor & Community Mentor | <span className="text-blue-700 font-normal">Lovely Professional University (CDP)</span>
                  </span>
                  <span className="text-slate-600 font-normal sm:text-right font-mono">Jul '25</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 mt-1">
                  <li>Conducted 30 hours of structured Python training for Class 8 school students.</li>
                  <li>Taught fundamental Python concepts through practical examples, live coding exercises, and interactive learning activities.</li>
                  <li>Awarded an official Certificate of Recognition by Lovely Professional University for community educational impact.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold">
                  <span className="text-slate-900">
                    CSE Student Coordinator | <span className="text-blue-700 font-normal">Lovely Professional University</span>
                  </span>
                  <span className="text-slate-600 font-normal sm:text-right font-mono">2025 – Present</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 mt-1">
                  <li>Organized and coordinated major student technical, cultural, and academic activities at LPU.</li>
                  <li>Facilitated cross-team collaboration across student volunteers, faculty mentors, and venue logistics.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: CERTIFICATIONS */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 border-b border-slate-300 pb-1 mb-2.5">
              Certifications
            </h2>

            <div className="space-y-1 text-xs sm:text-sm text-slate-800">
              <div className="flex justify-between items-center">
                <span>• Python Fundamentals | <span className="text-blue-700 font-medium">Infosys Springboard</span></span>
                <span className="font-mono text-slate-600 text-xs">Aug '26</span>
              </div>
              <div className="flex justify-between items-center">
                <span>• Big Data | <span className="text-blue-700 font-medium">Infosys Springboard</span></span>
                <span className="font-mono text-slate-600 text-xs">Apr '26</span>
              </div>
              <div className="flex justify-between items-center">
                <span>• Data Science | <span className="text-blue-700 font-medium">Infosys Springboard</span></span>
                <span className="font-mono text-slate-600 text-xs">Apr '26</span>
              </div>
            </div>
          </div>

          {/* Section: ACHIEVEMENTS */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 border-b border-slate-300 pb-1 mb-2.5">
              Achievements & Extracurriculars
            </h2>

            <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-800">
              <li><strong>1st Position — Spectra 2026:</strong> Secured 1st Position in International Folk Dance at Spectra 2026, Lovely Professional University.</li>
              <li><strong>1st Runner-up — One World 2026:</strong> Awarded 1st Runner-up at One World 2026 multicultural festival, LPU.</li>
              <li><strong>CSE Student Coordinator:</strong> Selected to organize campus-wide technical and student activities at LPU.</li>
              <li><strong>30 Hours Python Teaching:</strong> Completed 30 hours of Python teaching for middle school students with LPU Certificate.</li>
            </ul>
          </div>

          {/* Section: EDUCATION */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 border-b border-slate-300 pb-1 mb-2.5">
              Education
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-slate-800">
              <div>
                <div className="flex justify-between font-bold">
                  <span>Lovely Professional University</span>
                  <span className="font-normal text-slate-600">Phagwara, Punjab</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Bachelor of Technology (Computer Science and Engineering); CGPA: 7.18</span>
                  <span className="font-mono text-xs">Aug '25 – Present</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>S.S.N.M.S INTER COLLEGE, SIJUAI</span>
                  <span className="font-normal text-slate-600">Dhanbad, Jharkhand</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Intermediate (Science & Mathematics); Percentage: 79%</span>
                  <span className="font-mono text-xs">May '23 – Mar '25</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>Buds Garden School</span>
                  <span className="font-normal text-slate-600">Dhanbad, Jharkhand</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Matriculation; Percentage: 69%</span>
                  <span className="font-mono text-xs">Mar '23</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
