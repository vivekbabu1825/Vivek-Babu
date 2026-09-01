import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PhotoSection } from './components/PhotoSection';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationCertifications } from './components/EducationCertifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveSimulatorModal } from './components/InteractiveSimulatorModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { getStoredPhoto } from './utils/photoStorage';
import { Project } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [simulatorModalOpen, setSimulatorModalOpen] = useState<boolean>(false);
  const [simulatorProjectId, setSimulatorProjectId] = useState<string>('login-credential-page');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(() => getStoredPhoto());

  // Sync dark class on body/html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenSimulator = (projectId?: string) => {
    if (projectId) {
      setSimulatorProjectId(projectId);
    }
    setSimulatorModalOpen(true);
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeModalOpen(true)}
        profilePhoto={profilePhoto}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          darkMode={darkMode}
          onOpenResume={() => setResumeModalOpen(true)}
          profilePhoto={profilePhoto}
        />

        <About
          darkMode={darkMode}
          onOpenResume={() => setResumeModalOpen(true)}
          profilePhoto={profilePhoto}
        />

        <PhotoSection
          darkMode={darkMode}
          profilePhoto={profilePhoto}
          onPhotoChange={(newPhoto) => setProfilePhoto(newPhoto)}
        />

        <Skills
          darkMode={darkMode}
        />

        <Projects
          darkMode={darkMode}
          onOpenProjectDetail={(project) => setSelectedProject(project)}
          onOpenSimulator={handleOpenSimulator}
        />

        <ExperienceTimeline
          darkMode={darkMode}
        />

        <EducationCertifications
          darkMode={darkMode}
        />

        <Achievements
          darkMode={darkMode}
        />

        <Contact
          darkMode={darkMode}
          profilePhoto={profilePhoto}
        />
      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        onOpenResume={() => setResumeModalOpen(true)}
        profilePhoto={profilePhoto}
      />

      {/* Resume Digital Viewer / Print Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        darkMode={darkMode}
        profilePhoto={profilePhoto}
      />

      {/* Live Project Interactive Sandbox Modal */}
      <InteractiveSimulatorModal
        isOpen={simulatorModalOpen}
        onClose={() => setSimulatorModalOpen(false)}
        darkMode={darkMode}
        initialProjectId={simulatorProjectId}
      />

      {/* Project Deep Dive Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenSimulator={(pId) => handleOpenSimulator(pId || selectedProject?.id)}
        darkMode={darkMode}
      />

    </div>
  );
}
