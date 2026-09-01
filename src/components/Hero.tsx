import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Terminal as TerminalIcon, 
  Play, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Download, 
  Sparkles, 
  Code2, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  MapPin, 
  Phone,
  Copy,
  Check
} from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  onOpenResume: () => void;
  profilePhoto: string | null;
}

export const Hero: React.FC<HeroProps> = ({ 
  darkMode, 
  onOpenResume,
  profilePhoto
}) => {
  const [codeOutputVisible, setCodeOutputVisible] = useState(true);
  const [isExecuting, setIsExecuting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleRunCode = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setCodeOutputVisible(true);
    }, 450);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="home"
      className={`relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[90px] pointer-events-none rounded-full" />
      
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Photo Frame + Bio & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Bar: Availability Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className={darkMode ? 'text-slate-200' : 'text-slate-800'}>
                  Open to Opportunities & Internships
                </span>
                <span className={`hidden sm:inline text-xs font-mono px-2 py-0.5 rounded-full ${
                  darkMode ? 'bg-cyan-950/70 text-cyan-400 border border-cyan-800/40' : 'bg-cyan-100 text-cyan-800'
                }`}>
                  CSE '29
                </span>
              </div>
            </div>

            {/* Profile Greeting Section with Featured Photo Avatar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 pt-1">
              
              {/* Profile Photo Card */}
              <div className="relative shrink-0" id="hero-profile-photo-container">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 via-sky-400 to-indigo-600 shadow-xl shadow-cyan-500/25 transition-transform duration-300">
                  <div className={`w-full h-full rounded-[14px] overflow-hidden flex items-center justify-center relative ${
                    darkMode ? 'bg-slate-900' : 'bg-slate-100'
                  }`}>
                    {profilePhoto ? (
                      <img
                        src={profilePhoto}
                        alt="Vivek Babu Profile"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-2 text-center select-none">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-extrabold text-xl">
                          VB
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Main Greeting & Name */}
              <div className="space-y-1 sm:space-y-2">
                <h2 className={`text-base sm:text-lg font-medium tracking-tight ${darkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>
                  Hello World! I'm
                </h2>
                <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Vivek{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                    Babu
                  </span>
                </h1>
                <p className={`text-sm sm:text-base md:text-lg font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Computer Science & Engineering Undergrad @ <span className="text-cyan-500 font-bold">Lovely Professional University</span>
                </p>
              </div>

            </div>

            {/* Descriptive Summary */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Full-Stack and Software Engineer specializing in <strong className={darkMode ? 'text-slate-200' : 'text-slate-900'}>JavaScript, Python, C/C++, HTML/CSS</strong>, and <strong className={darkMode ? 'text-slate-200' : 'text-slate-900'}>MySQL Database Architecture</strong>. Certified in Python, Big Data, and Data Science by Infosys Springboard with hackathon-winning client-side validation experience.
            </p>

            {/* Quick Contact & Social Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500/60 hover:bg-slate-800'
                    : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900 hover:border-cyan-600 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-linkedin-link"
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500/60 hover:bg-slate-800'
                    : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900 hover:border-cyan-600 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                id="hero-copy-email-btn"
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50 shadow-sm'
                }`}
                title="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span className="font-mono text-xs sm:text-sm">{copiedEmail ? 'Email Copied!' : personalInfo.email}</span>
              </button>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                id="hero-download-cv-btn"
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold border transition-all duration-200 ${
                  darkMode
                    ? 'bg-slate-900/90 border-slate-700 text-slate-200 hover:border-cyan-500/50 hover:bg-slate-800 text-white'
                    : 'bg-white border-slate-300 text-slate-800 hover:border-slate-400 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4 text-cyan-500" />
                <span>View / Download CV</span>
              </button>

              <a
                href="#contact"
                id="hero-lets-talk-btn"
                className={`px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Let's connect &rarr;
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Code Console & Profile Snapshot */}
          <div className="lg:col-span-5">
            <div className={`rounded-2xl border overflow-hidden shadow-2xl transition-all duration-300 ${
              darkMode 
                ? 'bg-slate-900/90 border-slate-800/90 shadow-cyan-950/20' 
                : 'bg-white border-slate-200 shadow-slate-200'
            }`}>
              
              {/* Terminal Header Bar */}
              <div className={`px-4 py-3 border-b flex items-center justify-between ${
                darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-100 border-slate-200'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className={`text-xs font-mono font-medium ml-2 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    vivek_profile.js
                  </span>
                </div>

                <button
                  onClick={handleRunCode}
                  disabled={isExecuting}
                  id="terminal-run-code-btn"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-cyan-500 text-white hover:bg-cyan-400 transition-colors shadow-sm disabled:opacity-50"
                  title="Execute JavaScript Script"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{isExecuting ? 'Executing...' : 'Run'}</span>
                </button>
              </div>

              {/* Code Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                <div className="text-slate-500 italic mb-2">// Developer Profile Definition</div>
                <div>
                  <span className="text-pink-400 font-semibold">const</span>{' '}
                  <span className="text-cyan-300 font-bold">developer</span> = &#123;
                </div>
                <div className="pl-6 space-y-0.5">
                  <div>
                    <span className="text-slate-300">name:</span> <span className="text-amber-300">"Vivek Babu"</span>,
                  </div>
                  <div>
                    <span className="text-slate-300">university:</span> <span className="text-amber-300">"Lovely Professional University"</span>,
                  </div>
                  <div>
                    <span className="text-slate-300">degree:</span> <span className="text-amber-300">"B.Tech CSE (CGPA: 7.18)"</span>,
                  </div>
                  <div>
                    <span className="text-slate-300">skills:</span> [<span className="text-emerald-300">"JavaScript"</span>, <span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"HTML/CSS"</span>, <span className="text-emerald-300">"MySQL"</span>],
                  </div>
                  <div>
                    <span className="text-slate-300">certifications:</span> [<span className="text-emerald-300">"Infosys Python"</span>, <span className="text-emerald-300">"Big Data"</span>, <span className="text-emerald-300">"Data Science"</span>],
                  </div>
                  <div>
                    <span className="text-slate-300">leadership:</span> <span className="text-cyan-300">"CSE Coordinator & CDP Python Instructor (30h)"</span>
                  </div>
                </div>
                <div>&#125;;</div>
                
                {/* Simulated Output Box */}
                {codeOutputVisible && (
                  <div className={`mt-4 pt-3 border-t font-mono text-xs rounded-lg p-3 ${
                    darkMode 
                      ? 'bg-slate-950/90 border-slate-800/80 text-slate-300' 
                      : 'bg-slate-900 text-slate-200'
                  }`}>
                    <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1.5 pb-1 border-b border-slate-800">
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Node.js Output: Ready
                      </span>
                      <span>Execution: 0.015s</span>
                    </div>
                    <p className="text-cyan-300">💡 Focus: Building responsive, secure web platforms.</p>
                    <p className="text-slate-300 mt-1">📍 Locations: Phagwara, Punjab / Dhanbad, Jharkhand</p>
                    <p className="text-amber-300 mt-1">🏆 Flagship: Builtstrom Hackathon Login Validator & School Mgmt</p>
                  </div>
                )}
              </div>

              {/* Card Footer Quick Badges */}
              <div className={`px-4 py-3 border-t grid grid-cols-3 gap-2 text-center text-xs ${
                darkMode ? 'bg-slate-950/50 border-slate-800/70 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}>
                <div>
                  <div className="font-bold text-sm text-cyan-400">7.18</div>
                  <div className="text-[11px]">B.Tech CGPA</div>
                </div>
                <div className="border-x border-slate-800/40">
                  <div className="font-bold text-sm text-indigo-400">30 Hours</div>
                  <div className="text-[11px]">Python Teaching</div>
                </div>
                <div>
                  <div className="font-bold text-sm text-emerald-400">3 Certs</div>
                  <div className="text-[11px]">Infosys Accredited</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className={`mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
          darkMode 
            ? 'bg-slate-900/50 border-slate-800/80' 
            : 'bg-white/90 border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-3.5 p-2">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <div className={`text-xl sm:text-2xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                7.18
              </div>
              <div className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                B.Tech CSE CGPA (LPU)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className={`text-xl sm:text-2xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                30 hrs
              </div>
              <div className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Python Mentorship (CDP)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className={`text-xl sm:text-2xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                3 Certs
              </div>
              <div className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Infosys Springboard
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className={`text-xl sm:text-2xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                1st Place
              </div>
              <div className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Spectra '26 Gold Winner
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

