import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  User, 
  Cpu, 
  Code, 
  Database, 
  Users, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink,
  Award,
  Sparkles
} from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
  onOpenResume: () => void;
  profilePhoto?: string | null;
}

export const About: React.FC<AboutProps> = ({ 
  darkMode, 
  onOpenResume,
  profilePhoto
}) => {
  const pillars = [
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: 'Embedded Systems & IoT',
      description: 'Engineered the Arduino-Based Smart Classroom Noise Monitoring System with dual IR sensor occupancy calculation, sound sensor acoustic calibration, and real-time 16x2 LCD display.'
    },
    {
      icon: <Code className="w-6 h-6 text-indigo-400" />,
      title: 'Python, C, & C++ Core Programming',
      description: 'Strong foundation in object-oriented programming, data structures, algorithms, exception handling, and hands-on coding exercises developed through intensive training.'
    },
    {
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      title: 'Big Data & Relational Databases',
      description: 'Hands-on knowledge of Hadoop ecosystems, structured SQL queries, MySQL database schemas, and data manipulation using Pandas and NumPy libraries.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Campus Leadership & Event Coordination',
      description: 'Active coordinator with Student Organization DAC at LPU, successfully organizing 5+ campus technical and cultural events with cross-team logistics.'
    }
  ];

  return (
    <section
      id="about"
      className={`py-20 sm:py-28 transition-colors duration-300 border-t ${
        darkMode ? 'bg-slate-950 border-slate-800/80' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Embedded IoT, Big Data Analytics & Core Programming
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Get to know my academic journey at LPU, technical skills, hands-on IoT projects, and campus coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Bio Narrative & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-800/60">
                <h3 className={`text-xl font-bold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span>My Journey & Philosophy</span>
                </h3>

                {profilePhoto && (
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl border border-slate-700 bg-slate-800/50 text-xs">
                    <img 
                      src={profilePhoto} 
                      alt="Anshuman Choubey" 
                      className="w-6 h-6 rounded-full object-cover ring-1 ring-cyan-400"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-slate-300 font-medium">Anshuman Choubey</span>
                  </div>
                )}
              </div>
              
              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                <p>
                  I am a Computer Science & Engineering undergraduate at <strong>Lovely Professional University</strong> (Phagwara, Punjab). My focus spans embedded systems, IoT hardware-software integration, Big Data architectures, and core programming in Python, C, C++, and SQL.
                </p>
                <p>
                  My flagship project, the <strong>Arduino-Based Smart Classroom Noise Monitoring System</strong>, integrates dual IR sensors to compute real-time room occupancy and evaluates analog sound decibel signals against a dynamically computed acoustic limit, driving physical LCD and LED feedback indicators.
                </p>
                <p>
                  I have completed intensive <strong>Python Programming Training</strong> (Jun–Jul 2026) mastering algorithms, OOP, and data analytics with Pandas and NumPy. In addition, I have actively coordinated <strong>5+ university events with Student Organization DAC</strong> at LPU.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="mt-8 pt-6 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Degree: </span>
                    <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>B.Tech CSE (LPU, CGPA: 6.00)</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div>
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Location: </span>
                    <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Punjab / Dhanbad, Jharkhand</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div className="truncate">
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Email: </span>
                    <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Phone: </span>
                    <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>{personalInfo.phoneDisplay}</strong>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={onOpenResume}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500 text-white hover:bg-cyan-400 transition-colors shadow"
                >
                  View Full Academic CV &rarr;
                </button>
                <a
                  href="#contact"
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-colors ${
                    darkMode ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillar Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border transition-all duration-200 hover:translate-x-1 ${
                  darkMode 
                    ? 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70' 
                    : 'bg-white border-slate-200 shadow-sm hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-xl shrink-0 ${
                    darkMode ? 'bg-slate-800/80' : 'bg-slate-100'
                  }`}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className={`text-base font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {pillar.title}
                    </h4>
                    <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
