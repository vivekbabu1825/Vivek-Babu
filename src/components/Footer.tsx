import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  onOpenResume: () => void;
  profilePhoto?: string | null;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenResume, profilePhoto }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className={`border-t py-12 transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Summary */}
          <div className="flex items-center gap-3 text-center md:text-left">
            {profilePhoto ? (
              <div className="w-9 h-9 rounded-xl overflow-hidden ring-1 ring-cyan-500/50 shadow shrink-0">
                <img src={profilePhoto} alt="Anshuman Choubey" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ) : (
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow">
                AC
              </div>
            )}
            <div>
              <div className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {personalInfo.name}
              </div>
              <div className="text-xs text-slate-500">
                B.Tech Computer Science & Engineering • Lovely Professional University
              </div>
            </div>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <button onClick={onOpenResume} className="hover:text-cyan-400 transition-colors">Resume</button>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={`p-2 rounded-lg border transition-colors ${
                darkMode ? 'bg-slate-900 border-slate-800 hover:text-white hover:bg-slate-800' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={`p-2 rounded-lg border transition-colors ${
                darkMode ? 'bg-slate-900 border-slate-800 hover:text-sky-400 hover:bg-slate-800' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className={`p-2 rounded-lg border transition-colors ${
                darkMode ? 'bg-slate-900 border-slate-800 hover:text-cyan-400 hover:bg-slate-800' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white shadow transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/40 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with precision & craftsmanship</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
