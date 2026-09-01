import React from 'react';
import { educationHistory, certifications } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink, 
  BookOpen, 
  ScrollText,
  BadgeCheck
} from 'lucide-react';

interface EducationCertificationsProps {
  darkMode: boolean;
}

export const EducationCertifications: React.FC<EducationCertificationsProps> = ({ darkMode }) => {
  return (
    <section
      id="education"
      className={`py-20 sm:py-28 transition-colors duration-300 border-t ${
        darkMode ? 'bg-slate-950 border-slate-800/80' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Accreditations</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Education & Certifications
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Academic milestones from school foundation to B.Tech Computer Science and verified technical credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Education Path */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Education History
              </h3>
            </div>

            <div className="space-y-4">
              {educationHistory.map((edu, idx) => (
                <div
                  key={edu.id}
                  className={`p-6 rounded-2xl border transition-all duration-200 hover:border-cyan-500/40 ${
                    darkMode
                      ? 'bg-slate-900/60 border-slate-800 shadow-slate-950/20'
                      : 'bg-slate-50 border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {edu.institution}
                      </h4>
                      <p className="text-sm font-semibold text-cyan-500">
                        {edu.degree} — <span className="font-normal text-slate-400">{edu.field}</span>
                      </p>
                    </div>

                    {/* Score Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold shrink-0 self-start">
                      <span>{edu.scoreLabel}:</span>
                      <span>{edu.score}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-3 pt-3 border-t border-slate-800/40">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.highlights && (
                    <div className="mt-3 text-xs leading-relaxed text-slate-400">
                      {edu.highlights.map((h, hIdx) => (
                        <p key={hIdx} className="mt-1">{h}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <ScrollText className="w-5 h-5 text-indigo-400" />
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Verified Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`p-5 rounded-2xl border transition-all duration-200 hover:border-indigo-500/40 ${
                    darkMode
                      ? 'bg-slate-900/60 border-slate-800'
                      : 'bg-slate-50 border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <BadgeCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {cert.title}
                        </h4>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> Certified: {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Covered Skills */}
                  <div className="mt-3 pt-3 border-t border-slate-800/40">
                    <div className="text-[11px] font-mono text-slate-400 mb-2">Curriculum Topics:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill) => (
                        <span
                          key={skill}
                          className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                            darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-800'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certification Summary Card */}
            <div className={`p-5 rounded-2xl border ${
              darkMode ? 'bg-indigo-950/20 border-indigo-800/40 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-900'
            }`}>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-indigo-400 shrink-0" />
                <div className="text-xs leading-relaxed">
                  <strong>Continuous Learning:</strong> Committed to building deep foundational knowledge in data structures, low-level memory management, and modern programming paradigms.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
