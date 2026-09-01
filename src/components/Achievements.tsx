import React from 'react';
import { achievements } from '../data/portfolioData';
import { Trophy, Code2, Users, Cpu, Star, ExternalLink, ArrowRight } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

export const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      default:
        return <Trophy className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section
      id="achievements"
      className={`py-20 sm:py-28 transition-colors duration-300 border-t ${
        darkMode ? 'bg-slate-900/30 border-slate-800/80' : 'bg-slate-50/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Impact</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Key Achievements
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Demonstrated excellence across competitive coding, campus community initiatives, and hardware prototyping.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 shadow-slate-950/20'
                  : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${
                    darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-slate-100 border border-slate-200'
                  }`}>
                    {getIcon(item.icon)}
                  </div>

                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">
                    {item.statNumber}
                  </span>
                </div>

                <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1 font-semibold">
                  {item.category}
                </div>

                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">{item.statLabel}</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <Star className="w-3 h-3 fill-current" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
