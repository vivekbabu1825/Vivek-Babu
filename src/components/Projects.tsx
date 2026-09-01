import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { 
  FolderGit2, 
  Github, 
  Play, 
  Layers, 
  Cpu, 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle,
  Calendar,
  Sparkles
} from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
  onOpenProjectDetail: (project: Project) => void;
  onOpenSimulator: (projectId?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  darkMode,
  onOpenProjectDetail,
  onOpenSimulator,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'Frontend & Auth', label: 'Frontend & Auth' },
    { key: 'Database & Systems', label: 'Database & Systems' },
    { key: 'Web & E-Commerce', label: 'Web & E-Commerce' },
  ];

  const filteredProjects = filterCategory === 'all'
    ? projects
    : projects.filter(p => p.category === filterCategory);

  return (
    <section
      id="projects"
      className={`py-20 sm:py-28 transition-colors duration-300 border-t ${
        darkMode ? 'bg-slate-950 border-slate-800/80' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Projects & Technical Implementations
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Real-world applications spanning hackathon-winning client-side validators, relational SQL database management, and interactive web platforms.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilterCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  filterCategory === cat.key
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 scale-105'
                    : darkMode
                      ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                      : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const isFeatured = project.id === 'login-credential-page';

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                  isFeatured
                    ? darkMode
                      ? 'bg-slate-900/90 border-cyan-500/40 shadow-cyan-950/30'
                      : 'bg-white border-cyan-300 shadow-md'
                    : darkMode
                      ? 'bg-slate-900/60 border-slate-800/90 hover:border-slate-700 shadow-slate-950/30'
                      : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Top Badge Strip */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                      <FolderGit2 className="w-3.5 h-3.5" />
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </span>
                  </div>

                  {isFeatured && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-3">
                      <Sparkles className="w-3 h-3" />
                      <span>Hackathon Winner — Builtstrom</span>
                    </div>
                  )}

                  <h3 className={`text-xl font-bold tracking-tight mb-2 group-hover:text-cyan-400 transition-colors ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 mb-5 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 mb-6 text-xs">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-md ${
                          darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono px-2 py-1 rounded-md text-slate-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className={`p-4 border-t flex items-center justify-between gap-2 ${
                  darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <button
                    onClick={() => onOpenProjectDetail(project)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Deep Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveDemoAvailable && (
                      <button
                        onClick={() => onOpenSimulator(project.id)}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-white flex items-center gap-1.5 shadow-sm transition-all"
                        title="Run Interactive Live Sandbox"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Try Sandbox</span>
                      </button>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2 rounded-lg border transition-colors ${
                        darkMode 
                          ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700' 
                          : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
