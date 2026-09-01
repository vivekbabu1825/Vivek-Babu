import React, { useState, useRef, useEffect } from 'react';
import { 
  Camera, 
  Upload, 
  Image as ImageIcon, 
  Sparkles, 
  Sliders, 
  Eye, 
  Check, 
  RefreshCw, 
  Download, 
  CheckCircle2, 
  Trash2, 
  Palette, 
  Layers, 
  ShieldCheck, 
  User, 
  ZoomIn, 
  SunMedium,
  CheckCircle,
  FileCheck,
  Briefcase
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { DEFAULT_AVATAR_PRESETS, saveStoredPhoto, removeStoredPhoto, DEFAULT_OFFICIAL_PORTRAIT } from '../utils/photoStorage';

interface PhotoSectionProps {
  darkMode: boolean;
  profilePhoto: string | null;
  onPhotoChange: (newPhotoUrl: string | null) => void;
}

export const PhotoSection: React.FC<PhotoSectionProps> = ({
  darkMode,
  profilePhoto,
  onPhotoChange
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'upload' | 'style'>('preview');
  const [dragOver, setDragOver] = useState(false);
  const [selectedShape, setSelectedShape] = useState<'squircle' | 'circle' | 'rounded' | 'badge'>('squircle');
  const [selectedGlow, setSelectedGlow] = useState<'cyan' | 'indigo' | 'emerald' | 'gold' | 'purple'>('cyan');
  const [selectedFilter, setSelectedFilter] = useState<'normal' | 'vivid' | 'studio' | 'mono' | 'cyber'>('normal');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [badgeText, setBadgeText] = useState<string>('LPU CSE • Class of 2026');
  const [urlInput, setUrlInput] = useState<string>('');
  const [notification, setNotification] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      showNotification('Please select a valid image file (JPG, PNG, WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        saveStoredPhoto(result);
        onPhotoChange(result);
        showNotification('Profile photo uploaded and updated successfully!');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleSelectPreset = (url: string) => {
    saveStoredPhoto(url);
    onPhotoChange(url);
    showNotification('Applied preset photo to profile!');
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) return;
    saveStoredPhoto(urlInput.trim());
    onPhotoChange(urlInput.trim());
    setUrlInput('');
    showNotification('Photo URL applied successfully!');
  };

  const handleRemovePhoto = () => {
    removeStoredPhoto();
    onPhotoChange(null);
    showNotification('Photo cleared. Monogram initials will be shown.');
  };

  // Glow color definitions
  const glowStyles = {
    cyan: 'ring-cyan-500/80 shadow-cyan-500/30 border-cyan-400',
    indigo: 'ring-indigo-500/80 shadow-indigo-500/30 border-indigo-400',
    emerald: 'ring-emerald-500/80 shadow-emerald-500/30 border-emerald-400',
    gold: 'ring-amber-500/80 shadow-amber-500/30 border-amber-400',
    purple: 'ring-purple-500/80 shadow-purple-500/30 border-purple-400'
  };

  const glowBackgrounds = {
    cyan: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    indigo: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    emerald: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    gold: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    purple: 'from-purple-500/20 via-pink-500/10 to-transparent'
  };

  // Shape class definitions
  const shapeClasses = {
    squircle: 'rounded-3xl',
    circle: 'rounded-full',
    rounded: 'rounded-2xl',
    badge: 'rounded-[2.5rem]'
  };

  // Filter style mappings
  const filterStyles = {
    normal: '',
    vivid: 'contrast-125 saturate-125',
    studio: 'brightness-105 contrast-110 saturate-105',
    mono: 'grayscale contrast-125',
    cyber: 'hue-rotate-15 contrast-115'
  };

  return (
    <section 
      id="photo-showcase" 
      className={`py-20 border-t transition-colors duration-300 relative overflow-hidden ${
        darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Profile Persona & Photo Studio</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Professional Portrait & Visual Identity
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Showcasing academic & executive attire with interactive real-time photo styling, custom frame controls, and instant synchronizer.
          </p>
        </div>

        {/* Floating Notification */}
        {notification && (
          <div className="max-w-md mx-auto mb-6 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs text-center flex items-center justify-center gap-2 shadow-lg animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{notification}</span>
          </div>
        )}

        {/* Main Grid: Photo Showcase & Control Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Visual Showcase Card (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div 
              className={`p-6 sm:p-8 rounded-3xl border shadow-2xl relative overflow-hidden transition-all duration-300 ${
                darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200/50'
              }`}
            >
              {/* Top Accent Gradient Ribbon */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${glowBackgrounds[selectedGlow]}`} />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                
                {/* Visual Avatar with Real-time Style Props */}
                <div className="relative shrink-0 group">
                  <div 
                    className={`w-44 h-56 sm:w-52 sm:h-64 ${shapeClasses[selectedShape]} overflow-hidden border-4 ${glowStyles[selectedGlow]} shadow-2xl transition-all duration-300 relative flex items-center justify-center ${
                      darkMode ? 'bg-slate-900' : 'bg-slate-100'
                    }`}
                  >
                    {profilePhoto ? (
                      <img
                        src={profilePhoto}
                        alt="Anshuman Choubey"
                        className={`w-full h-full object-cover transition-transform duration-300 ${filterStyles[selectedFilter]}`}
                        style={{ transform: `scale(${zoomLevel / 100})` }}
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-4 text-center">
                        <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-3xl mb-2">
                          AC
                        </div>
                        <span className="text-xs font-semibold text-slate-400">Anshuman Choubey</span>
                        <span className="text-[10px] text-slate-500">No Photo Uploaded</span>
                      </div>
                    )}

                    {/* Watermark overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-[11px] text-white font-mono flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-400" /> Formal Portrait
                      </span>
                    </div>
                  </div>

                  {/* University / Verification Badge */}
                  <div className="absolute -bottom-3 -right-2 px-3 py-1 rounded-full bg-slate-900 text-cyan-400 border border-cyan-500/40 text-[11px] font-bold shadow-lg flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Verified ID</span>
                  </div>
                </div>

                {/* Persona Bio & Academic Accreditations */}
                <div className="space-y-3.5 text-center sm:text-left flex-1">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {badgeText}
                    </span>
                    <h3 className={`text-2xl sm:text-3xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {personalInfo.name}
                    </h3>
                    <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      B.Tech Computer Science & Engineering • Lovely Professional University
                    </p>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Developer & IoT researcher. Creator of the Arduino Smart Classroom Noise Monitoring System, with expertise in Python, C/C++, SQL, Big Data (Hadoop), and ML analytics with Pandas and NumPy.
                  </p>

                  {/* Quick Metadata Matrix */}
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <div className="text-[10px] text-slate-400">University CGPA</div>
                      <div className="font-bold text-cyan-400 font-mono text-sm">6.00 (B.Tech CSE)</div>
                    </div>
                    <div className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <div className="text-[10px] text-slate-400">Campus Leadership</div>
                      <div className="font-bold text-indigo-400 text-xs">DAC Coordinator</div>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload New Photo</span>
                    </button>

                    {profilePhoto && (
                      <button
                        onClick={handleRemovePhoto}
                        className="px-3 py-1.5 rounded-xl border border-rose-500/40 text-rose-400 hover:bg-rose-500/10 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    )}
                  </div>
                </div>

              </div>

              {/* Multi-Context Preview Strip */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Synchronized Multi-Context Display Previews</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  {/* Context 1: Hero Banner Badge */}
                  <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
                    <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0 border border-cyan-500/40 bg-slate-800 flex items-center justify-center">
                      {profilePhoto ? (
                        <img src={profilePhoto} alt="Hero Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      ) : (
                        <span className="text-cyan-400 font-bold text-xs">AC</span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold truncate">Hero Monogram</div>
                      <div className="text-[9px] text-slate-400">Header & Intro strip</div>
                    </div>
                  </div>

                  {/* Context 2: Official Resume Header */}
                  <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
                    <div className="w-9 h-9 rounded-md overflow-hidden shrink-0 border border-indigo-500/40 bg-slate-800 flex items-center justify-center">
                      {profilePhoto ? (
                        <img src={profilePhoto} alt="Resume Headshot" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      ) : (
                        <span className="text-indigo-400 font-bold text-xs">AC</span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold truncate">Resume Document</div>
                      <div className="text-[9px] text-slate-400">Printable CV Header</div>
                    </div>
                  </div>

                  {/* Context 3: Campus ID / GitHub */}
                  <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
                    <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-emerald-500/40 bg-slate-800 flex items-center justify-center">
                      {profilePhoto ? (
                        <img src={profilePhoto} alt="Campus ID" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      ) : (
                        <span className="text-emerald-400 font-bold text-xs">AC</span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold truncate">Campus ID Badge</div>
                      <div className="text-[9px] text-slate-400">GitHub & LinkedIn Ring</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Customization Studio Controls & Upload Center (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className={`p-6 rounded-3xl border shadow-xl ${
              darkMode ? 'bg-slate-950/90 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              
              {/* Studio Tabs */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold text-sm">Photo & Frame Studio</span>
                </div>

                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                      activeTab === 'preview' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Presets
                  </button>
                  <button
                    onClick={() => setActiveTab('upload')}
                    className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                      activeTab === 'upload' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Upload
                  </button>
                  <button
                    onClick={() => setActiveTab('style')}
                    className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                      activeTab === 'style' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Styles
                  </button>
                </div>
              </div>

              {/* Hidden File Input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileUpload(e.target.files[0]);
                  }
                }}
                accept="image/*"
                className="hidden"
              />

              {/* TAB 1: PRESET PROFESSIONAL AVATARS */}
              {activeTab === 'preview' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-400">
                    Select a curated formal executive avatar or headshot style for the portfolio:
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {DEFAULT_AVATAR_PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => handleSelectPreset(preset.url)}
                        className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-all duration-200 ${
                          profilePhoto === preset.url
                            ? 'bg-cyan-500/20 border-cyan-400 ring-2 ring-cyan-500/40'
                            : darkMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <img
                          src={preset.url}
                          alt={preset.name}
                          className="w-10 h-10 rounded-lg object-cover shrink-0 border border-slate-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0">
                          <div className="text-xs font-bold truncate">{preset.name}</div>
                          <div className="text-[10px] text-slate-400 truncate">{preset.tag}</div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-2.5 rounded-xl border-2 border-dashed border-cyan-500/40 hover:border-cyan-400 bg-cyan-500/5 text-cyan-400 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Upload My Custom Photo File</span>
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: UPLOAD & URL CONTROLLER */}
              {activeTab === 'upload' && (
                <div className="space-y-4">
                  
                  {/* Drag and Drop Zone */}
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`p-6 rounded-2xl border-2 border-dashed text-center cursor-pointer transition-all duration-200 ${
                      dragOver
                        ? 'border-cyan-400 bg-cyan-500/10 scale-[1.01]'
                        : darkMode 
                          ? 'border-slate-800 bg-slate-900/60 hover:border-cyan-500/40' 
                          : 'border-slate-300 bg-slate-50 hover:border-cyan-500/60'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-2.5">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-slate-200">
                      Click to Browse or Drag & Drop Image
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">
                      Supports JPG, PNG, WEBP • Max 10MB
                    </div>
                  </div>

                  {/* Direct Image URL input */}
                  <div className="space-y-1.5 pt-1">
                    <label className="text-[11px] font-semibold text-slate-300">
                      Or Import from Direct Web Image URL:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        placeholder="https://example.com/my-photo.jpg"
                        className="flex-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                      <button
                        onClick={handleApplyUrl}
                        className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-semibold shrink-0"
                      >
                        Apply
                      </button>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 3: FRAME & LIGHTING STYLES */}
              {activeTab === 'style' && (
                <div className="space-y-4">
                  
                  {/* Shape Selector */}
                  <div>
                    <div className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                      <span>Frame Geometry:</span>
                      <span className="font-mono text-[10px] text-cyan-400 uppercase">{selectedShape}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { id: 'squircle', label: 'Squircle' },
                        { id: 'circle', label: 'Circle' },
                        { id: 'rounded', label: 'Card' },
                        { id: 'badge', label: 'Shield' }
                      ].map(shape => (
                        <button
                          key={shape.id}
                          onClick={() => setSelectedShape(shape.id as any)}
                          className={`py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                            selectedShape === shape.id
                              ? 'bg-cyan-500 text-white font-bold'
                              : darkMode ? 'bg-slate-900 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {shape.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Accent Glow Ring */}
                  <div>
                    <div className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                      <span>Accent Ring Lighting:</span>
                      <span className="font-mono text-[10px] text-cyan-400 uppercase">{selectedGlow}</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1.5">
                      {[
                        { id: 'cyan', color: 'bg-cyan-400', label: 'Cyan' },
                        { id: 'indigo', color: 'bg-indigo-400', label: 'Indigo' },
                        { id: 'emerald', color: 'bg-emerald-400', label: 'Mint' },
                        { id: 'gold', color: 'bg-amber-400', label: 'Gold' },
                        { id: 'purple', color: 'bg-purple-400', label: 'Purple' }
                      ].map(glow => (
                        <button
                          key={glow.id}
                          onClick={() => setSelectedGlow(glow.id as any)}
                          className={`py-1.5 rounded-lg text-xs flex flex-col items-center gap-1 transition-all ${
                            selectedGlow === glow.id
                              ? 'bg-slate-800 ring-2 ring-cyan-400 text-white font-bold'
                              : darkMode ? 'bg-slate-900 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <span className={`w-3 h-3 rounded-full ${glow.color}`} />
                          <span className="text-[9px]">{glow.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Visual Filter Preset */}
                  <div>
                    <div className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                      <span>Tone & Filter:</span>
                      <span className="font-mono text-[10px] text-cyan-400 uppercase">{selectedFilter}</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1">
                      {[
                        { id: 'normal', label: 'Normal' },
                        { id: 'studio', label: 'Studio' },
                        { id: 'vivid', label: 'Vivid' },
                        { id: 'mono', label: 'Mono' },
                        { id: 'cyber', label: 'Cyber' }
                      ].map(f => (
                        <button
                          key={f.id}
                          onClick={() => setSelectedFilter(f.id as any)}
                          className={`py-1 rounded text-[10px] font-mono transition-colors ${
                            selectedFilter === f.id
                              ? 'bg-cyan-500 text-white font-bold'
                              : darkMode ? 'bg-slate-900 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Scale / Zoom Slider */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1">
                      <span className="flex items-center gap-1"><ZoomIn className="w-3 h-3 text-cyan-400" /> Zoom Level:</span>
                      <span className="font-mono text-cyan-400">{zoomLevel}%</span>
                    </div>
                    <input
                      type="range"
                      min="90"
                      max="140"
                      value={zoomLevel}
                      onChange={(e) => setZoomLevel(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                  </div>

                  {/* Badge Text Customizer */}
                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                      Sub-title Tag / Badge:
                    </label>
                    <input
                      type="text"
                      value={badgeText}
                      onChange={(e) => setBadgeText(e.target.value)}
                      placeholder="e.g. LPU CSE • Class of 2026"
                      className="w-full px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                </div>
              )}

              {/* Footer Indicator */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" /> Auto-Saved to Storage
                </span>
                <button
                  onClick={() => {
                    setSelectedShape('squircle');
                    setSelectedGlow('cyan');
                    setSelectedFilter('normal');
                    setZoomLevel(100);
                    setBadgeText('LPU CSE • Class of 2026');
                    showNotification('Styles reset to default.');
                  }}
                  className="text-slate-400 hover:text-white underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Reset Styles
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
