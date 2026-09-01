import React from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, Cpu, Code2, Database, CheckCircle2, Calendar, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenSimulator?: (projectId?: string) => void;
  darkMode: boolean;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenSimulator,
  darkMode,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div 
        className={`relative w-full max-w-3xl rounded-2xl border shadow-2xl overflow-hidden my-8 transition-colors ${
          darkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
        }`}
      >
        {/* Header */}
        <div className={`flex items-start justify-between px-6 py-5 border-b ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {project.date}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-cyan-400 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Project Overview
            </h4>
            <p className={`text-sm sm:text-base leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {project.longDescription}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
              Key Engineering Features & Contributions
            </h4>
            <div className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Performance Metrics
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div 
                    key={idx}
                    className={`p-3 rounded-xl border text-center ${
                      darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
                    }`}
                  >
                    <div className="text-xs text-slate-400">{metric.label}</div>
                    <div className="text-sm sm:text-base font-bold text-cyan-400 mt-0.5">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs font-mono font-medium px-3 py-1.5 rounded-lg border ${
                    darkMode 
                      ? 'bg-slate-800/80 border-slate-700 text-slate-200' 
                      : 'bg-slate-100 border-slate-300 text-slate-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Live Simulator CTA if Available */}
          {project.liveDemoAvailable && onOpenSimulator && (
            <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
              darkMode ? 'bg-cyan-950/40 border-cyan-800/50' : 'bg-cyan-50 border-cyan-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm">Interactive Live Sandbox Ready</div>
                  <div className="text-xs text-slate-400">Test reactive client-side logic, SQL records & UI states</div>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenSimulator(project.id);
                }}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-white shadow transition-all"
              >
                Launch Sandbox
              </button>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className={`px-6 py-4 border-t flex items-center justify-between ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:underline"
          >
            <Github className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
