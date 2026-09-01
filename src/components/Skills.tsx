import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Code2, 
  Database, 
  Cpu, 
  Terminal, 
  CheckCircle, 
  Sliders, 
  FileSpreadsheet, 
  Layers, 
  Wrench,
  BookOpen
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryOptions = [
    { key: 'all', label: 'All Proficiencies' },
    { key: 'languages', label: 'Programming Languages' },
    { key: 'frontend', label: 'Web & Frontend' },
    { key: 'databaseTools', label: 'Databases & Tools' },
    { key: 'dataCertifications', label: 'Infosys & Data Certs' },
    { key: 'softSkills', label: 'Leadership & Soft Skills' },
  ];

  const displayedCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.categoryKey === activeCategory);

  const getCategoryIcon = (categoryKey: string) => {
    switch (categoryKey) {
      case 'languages':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'frontend':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'databaseTools':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'dataCertifications':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'softSkills':
        return <BookOpen className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section
      id="skills"
      className={`py-20 sm:py-28 transition-colors duration-300 border-t ${
        darkMode ? 'bg-slate-900/30 border-slate-800/80' : 'bg-slate-50/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Skills & Competency Matrix
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            From JavaScript, Python, and C/C++ to relational MySQL schemas, Infosys certifications, and community teaching.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categoryOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setActiveCategory(opt.key)}
                id={`filter-skills-${opt.key}`}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === opt.key
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 scale-105'
                    : darkMode
                      ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 shadow-sm'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.categoryKey}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 shadow-slate-950/30'
                  : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl ${
                    darkMode ? 'bg-slate-800/80 border border-slate-700/60' : 'bg-slate-100 border border-slate-200'
                  }`}>
                    {getCategoryIcon(category.categoryKey)}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {category.title}
                    </h3>
                    <span className="text-xs text-cyan-500 font-mono">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                <p className={`text-xs mb-5 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {category.description}
                </p>

                {/* Skills list with progress */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-medium ${
                            skill.level === 'Advanced'
                              ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                              : skill.level === 'Proficient'
                                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      {/* Bar indicator */}
                      <div className={`h-1.5 w-full rounded-full overflow-hidden ${
                        darkMode ? 'bg-slate-800' : 'bg-slate-200'
                      }`}>
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-700"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>

                      <p className={`text-[11px] leading-normal ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicators */}
              <div className="mt-6 pt-4 border-t border-slate-800/40 flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={`tag-${skill.name}`}
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                      darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    #{skill.name.toLowerCase().replace(/\s+/g, '')}
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
