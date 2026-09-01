import React from 'react';
import { trainingExperiences } from '../data/portfolioData';
import { Briefcase, Calendar, Award, CheckCircle2, Users, Terminal, ArrowRight } from 'lucide-react';

interface ExperienceTimelineProps {
  darkMode: boolean;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`py-20 sm:py-28 transition-colors duration-300 border-t ${
        darkMode ? 'bg-slate-900/30 border-slate-800/80' : 'bg-slate-50/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Training & Leadership Journey
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Hands-on technical training and high-impact university campus coordination.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto space-y-8">
          {trainingExperiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`relative rounded-2xl border p-6 sm:p-8 transition-all duration-300 hover:shadow-xl ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 shadow-slate-950/20'
                  : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-xl ${
                      exp.type === 'Training'
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                        : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                    }`}>
                      {exp.type === 'Training' ? <Terminal className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                    </div>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-cyan-500">
                        {exp.organization}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 sm:text-right">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points from CV */}
              <div className="space-y-2.5 my-5">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skills Gained Tags */}
              <div className="pt-4 border-t border-slate-800/40 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500">Competencies:</span>
                {exp.skillsGained.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-mono px-2.5 py-1 rounded-md ${
                      darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
