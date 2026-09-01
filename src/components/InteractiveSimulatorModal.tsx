import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  CheckCircle2, 
  AlertCircle, 
  Volume2, 
  VolumeX, 
  Users, 
  Cpu, 
  Database, 
  FileSpreadsheet, 
  Sliders, 
  Code2, 
  ShieldCheck, 
  Sparkles,
  ExternalLink,
  RefreshCw,
  Check,
  Radio,
  ArrowRight,
  TrendingUp,
  Activity,
  Download
} from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';
import { Project } from '../types';

interface InteractiveSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  initialProjectId?: string;
}

export const InteractiveSimulatorModal: React.FC<InteractiveSimulatorModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  initialProjectId = 'arduino-smart-classroom-noise-monitoring'
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(initialProjectId);
  const [activeTab, setActiveTab] = useState<'simulator' | 'code' | 'specs'>('simulator');

  // --- Project 1: Arduino Smart Classroom State ---
  const [studentCount, setStudentCount] = useState<number>(18);
  const [soundDb, setSoundDb] = useState<number>(54);
  const [irTriggered, setIrTriggered] = useState<'in' | 'out' | null>(null);
  const [isBuzzerActive, setIsBuzzerActive] = useState<boolean>(false);
  const [hardwareLogs, setHardwareLogs] = useState<string[]>([
    '[INIT] Arduino Uno booted. LiquidCrystal 16x2 initialized (Pins 12,11,5,4,3,2).',
    '[SENSOR] IR Entry Pin 2 & IR Exit Pin 3 armed (PULLUP mode).',
    '[SENSOR] Analog Sound Sensor A0 calibrated at 10-bit resolution.',
    '[STATUS] Smart Classroom Noise Monitoring active.'
  ]);

  // Dynamic noise limit computation
  const dynamicLimit = Math.round(40 + studentCount * 1.5);
  let acousticStatus: 'QUIET' | 'MODERATE' | 'NOISY!' = 'QUIET';
  if (soundDb < dynamicLimit) {
    acousticStatus = 'QUIET';
  } else if (soundDb < dynamicLimit + 18) {
    acousticStatus = 'MODERATE';
  } else {
    acousticStatus = 'NOISY!';
  }

  // Update buzzer & hardware logs when noise changes
  useEffect(() => {
    if (acousticStatus === 'NOISY!') {
      setIsBuzzerActive(true);
    } else {
      setIsBuzzerActive(false);
    }
  }, [acousticStatus]);

  const handleTriggerEntry = () => {
    setStudentCount(prev => prev + 1);
    setIrTriggered('in');
    const time = new Date().toLocaleTimeString();
    setHardwareLogs(prev => [
      `[${time}] IR_IN (Pin 2) LOW: Student entered. Count = ${studentCount + 1}.`,
      ...prev.slice(0, 5)
    ]);
    setTimeout(() => setIrTriggered(null), 600);
  };

  const handleTriggerExit = () => {
    if (studentCount <= 0) return;
    setStudentCount(prev => prev - 1);
    setIrTriggered('out');
    const time = new Date().toLocaleTimeString();
    setHardwareLogs(prev => [
      `[${time}] IR_OUT (Pin 3) LOW: Student exited. Count = ${studentCount - 1}.`,
      ...prev.slice(0, 5)
    ]);
    setTimeout(() => setIrTriggered(null), 600);
  };

  const handleResetClassroom = () => {
    setStudentCount(15);
    setSoundDb(48);
    const time = new Date().toLocaleTimeString();
    setHardwareLogs(prev => [
      `[${time}] System Reset: Reset to default 15 students, 48 dB sound level.`,
      ...prev.slice(0, 5)
    ]);
  };

  // --- Project 2: Python Data Analytics State ---
  const [selectedHour, setSelectedHour] = useState<string>('All');
  const [anomalyFilter, setAnomalyFilter] = useState<boolean>(false);
  const [exportedToast, setExportedToast] = useState<boolean>(false);

  const rawAcousticData = [
    { id: 1, hour: '09:00 AM', room: 'Hall-101', students: 42, sound_db: 58.2, zScore: 0.4, isAnomaly: false },
    { id: 2, hour: '10:00 AM', room: 'Lab-A', students: 28, sound_db: 49.5, zScore: -0.8, isAnomaly: false },
    { id: 3, hour: '11:00 AM', room: 'Hall-102', students: 60, sound_db: 88.6, zScore: 2.7, isAnomaly: true },
    { id: 4, hour: '12:00 PM', room: 'Seminar-2', students: 35, sound_db: 54.0, zScore: -0.2, isAnomaly: false },
    { id: 5, hour: '02:00 PM', room: 'Hall-101', students: 48, sound_db: 92.4, zScore: 3.1, isAnomaly: true },
    { id: 6, hour: '03:00 PM', room: 'Library-3', students: 18, sound_db: 36.1, zScore: -1.9, isAnomaly: false },
    { id: 7, hour: '04:00 PM', room: 'Lab-B', students: 32, sound_db: 62.8, zScore: 0.9, isAnomaly: false }
  ];

  const filteredData = rawAcousticData.filter(item => {
    const matchesHour = selectedHour === 'All' || item.hour === selectedHour;
    const matchesAnomaly = !anomalyFilter || item.isAnomaly;
    return matchesHour && matchesAnomaly;
  });

  const avgNoise = (filteredData.reduce((acc, curr) => acc + curr.sound_db, 0) / (filteredData.length || 1)).toFixed(1);
  const peakNoise = Math.max(...filteredData.map(d => d.sound_db), 0).toFixed(1);
  const totalAnomalies = filteredData.filter(d => d.isAnomaly).length;

  const handleExportExcel = () => {
    setExportedToast(true);
    setTimeout(() => setExportedToast(false), 2500);
  };

  // --- Project 3: Hadoop SQL Engine State ---
  const [sqlTable, setSqlTable] = useState<'nodes' | 'logs'>('nodes');
  const [sqlQuery, setSqlQuery] = useState<string>('SELECT * FROM classroom_nodes WHERE is_active = TRUE;');

  const nodesTableData = [
    { node_id: 101, room_number: 'LH-301 (CSE)', sensor_type: 'Arduino_Acoustic_DualIR', max_capacity: 65, is_active: 'TRUE' },
    { node_id: 102, room_number: 'Lab-402 (Python)', sensor_type: 'Arduino_Acoustic_DualIR', max_capacity: 40, is_active: 'TRUE' },
    { node_id: 103, room_number: 'Seminar-1 (DAC)', sensor_type: 'Arduino_Acoustic_DualIR', max_capacity: 120, is_active: 'TRUE' },
    { node_id: 104, room_number: 'StudyHall-B', sensor_type: 'Arduino_Acoustic_DualIR', max_capacity: 50, is_active: 'FALSE' }
  ];

  const logsTableData = [
    { log_id: 88401, node_id: 101, occupancy_count: 52, sound_level_db: 58.4, status: 'NORMAL', recorded_at: '2026-09-01 10:15:00' },
    { log_id: 88402, node_id: 101, occupancy_count: 58, sound_level_db: 86.9, status: 'NOISE_ALERT', recorded_at: '2026-09-01 10:45:00' },
    { log_id: 88403, node_id: 102, occupancy_count: 38, sound_level_db: 49.2, status: 'NORMAL', recorded_at: '2026-09-01 11:00:00' },
    { log_id: 88404, node_id: 103, occupancy_count: 110, sound_level_db: 91.5, status: 'NOISE_ALERT', recorded_at: '2026-09-01 11:30:00' }
  ];

  if (!isOpen) return null;

  const currentProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className={`relative w-full max-w-5xl rounded-2xl border shadow-2xl overflow-hidden my-4 sm:my-8 transition-colors ${
          darkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
        }`}
      >
        {/* Modal Topbar */}
        <div className={`flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-sm">
              <Play className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg leading-snug">
                  Interactive Live Project Sandbox
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Live Testing
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Experience Anshuman Choubey's projects with real-time reactive hardware and analytics simulators
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              id="close-simulator-modal-btn"
              className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Selector Tab Bar */}
        <div className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 border-b overflow-x-auto ${
          darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
            Select Project:
          </span>
          {projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => setSelectedProjectId(proj.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                selectedProjectId === proj.id
                  ? 'bg-cyan-500 text-white shadow-sm ring-2 ring-cyan-500/30'
                  : darkMode 
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {proj.simulatorType === 'arduino-smart-classroom' && <Cpu className="w-3.5 h-3.5" />}
              {proj.simulatorType === 'python-data-ml' && <FileSpreadsheet className="w-3.5 h-3.5" />}
              {proj.simulatorType === 'hadoop-sql-mgmt' && <Database className="w-3.5 h-3.5" />}
              <span>{proj.title.split(' ')[0]} {proj.title.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* View Mode Switcher (Simulator / Source Code / Technical Specs) */}
        <div className={`flex items-center justify-between px-5 sm:px-6 py-2.5 border-b text-xs ${
          darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-400' : 'bg-slate-100/70 border-slate-200 text-slate-600'
        }`}>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-slate-200">{currentProject.title}</span>
            <span className="text-slate-500 font-mono">({currentProject.date})</span>
          </div>

          <div className="flex items-center gap-1 bg-slate-800/40 p-0.5 rounded-lg border border-slate-700/50">
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3 py-1 rounded-md font-semibold transition-colors ${
                activeTab === 'simulator' 
                  ? 'bg-cyan-500 text-white shadow-xs' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Live Simulator
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1 rounded-md font-semibold transition-colors ${
                activeTab === 'code' 
                  ? 'bg-cyan-500 text-white shadow-xs' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Source Code
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-3 py-1 rounded-md font-semibold transition-colors ${
                activeTab === 'specs' 
                  ? 'bg-cyan-500 text-white shadow-xs' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Architecture & Specs
            </button>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-7 max-h-[72vh] overflow-y-auto">
          
          {/* TAB 1: LIVE SIMULATOR */}
          {activeTab === 'simulator' && (
            <div>
              {/* ============================================================== */}
              {/* SIMULATOR 1: ARDUINO SMART CLASSROOM NOISE MONITORING */}
              {/* ============================================================== */}
              {currentProject.simulatorType === 'arduino-smart-classroom' && (
                <div className="space-y-6">
                  
                  {/* Top Live Hardware Breadboard & Dashboard */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Left: Hardware Sensor Dashboard & Interactive Classroom Controller */}
                    <div className="lg:col-span-6 space-y-5">
                      
                      {/* Interactive Classroom Gates (IR Entry / Exit) */}
                      <div className={`p-4 rounded-xl border ${
                        darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-cyan-400" />
                            <span className="text-xs font-bold uppercase tracking-wider">
                              Classroom Entry & IR Occupancy Sensor
                            </span>
                          </div>
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/40">
                            Pins D2 & D3
                          </span>
                        </div>

                        {/* Interactive Classroom Door Visualizer */}
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <button
                            onClick={handleTriggerEntry}
                            className={`p-3 rounded-xl border text-center transition-all duration-200 flex flex-col items-center gap-1.5 ${
                              irTriggered === 'in' 
                                ? 'bg-emerald-500/20 border-emerald-400 scale-[1.02]' 
                                : darkMode ? 'bg-slate-900 border-slate-800 hover:border-emerald-500/50' : 'bg-white border-slate-300 hover:border-emerald-500'
                            }`}
                          >
                            <span className="text-xl">🚪🚶‍♂️</span>
                            <span className="text-xs font-bold text-emerald-400">+1 Student Entry</span>
                            <span className="text-[10px] text-slate-400 font-mono">Triggers IR_IN (Pin 2)</span>
                          </button>

                          <button
                            onClick={handleTriggerExit}
                            disabled={studentCount <= 0}
                            className={`p-3 rounded-xl border text-center transition-all duration-200 flex flex-col items-center gap-1.5 disabled:opacity-50 ${
                              irTriggered === 'out' 
                                ? 'bg-amber-500/20 border-amber-400 scale-[1.02]' 
                                : darkMode ? 'bg-slate-900 border-slate-800 hover:border-amber-500/50' : 'bg-white border-slate-300 hover:border-amber-500'
                            }`}
                          >
                            <span className="text-xl">🚶‍♀️🚪</span>
                            <span className="text-xs font-bold text-amber-400">-1 Student Exit</span>
                            <span className="text-[10px] text-slate-400 font-mono">Triggers IR_OUT (Pin 3)</span>
                          </button>
                        </div>

                        <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800/40">
                          <span className="text-slate-400">Classroom Headcount:</span>
                          <span className="font-bold text-base font-mono text-cyan-400">{studentCount} Students</span>
                          <button
                            onClick={handleResetClassroom}
                            className="text-[11px] text-slate-400 hover:text-white underline flex items-center gap-1"
                          >
                            <RefreshCw className="w-3 h-3" /> Reset
                          </button>
                        </div>
                      </div>

                      {/* Acoustic Sound Sensor Level Controller */}
                      <div className={`p-4 rounded-xl border ${
                        darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Volume2 className="w-4 h-4 text-indigo-400" />
                            <span className="text-xs font-bold uppercase tracking-wider">
                              Sound Sensor (Analog A0) Decibel Level
                            </span>
                          </div>
                          <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                            soundDb < dynamicLimit 
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' 
                              : soundDb < dynamicLimit + 18 
                                ? 'bg-amber-950 text-amber-400 border border-amber-800' 
                                : 'bg-rose-950 text-rose-400 border border-rose-800 animate-pulse'
                          }`}>
                            {soundDb} dB
                          </span>
                        </div>

                        <input 
                          type="range"
                          min="20"
                          max="115"
                          value={soundDb}
                          onChange={(e) => setSoundDb(parseInt(e.target.value))}
                          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 mb-3"
                        />

                        {/* Presets */}
                        <div className="grid grid-cols-4 gap-1.5">
                          {[
                            { label: 'Study 35dB', val: 35 },
                            { label: 'Lecture 50dB', val: 50 },
                            { label: 'Group 68dB', val: 68 },
                            { label: 'Noisy 95dB', val: 95 }
                          ].map(preset => (
                            <button
                              key={preset.val}
                              onClick={() => setSoundDb(preset.val)}
                              className={`py-1 rounded text-[10px] font-mono transition-colors ${
                                soundDb === preset.val 
                                  ? 'bg-cyan-500 text-white font-bold' 
                                  : darkMode ? 'bg-slate-900 text-slate-400 hover:text-white' : 'bg-white border text-slate-700'
                              }`}
                            >
                              {preset.label}
                            </button>
                          ))}
                        </div>

                        <div className="mt-3 p-2 rounded bg-slate-900/90 text-[11px] font-mono text-slate-300 flex items-center justify-between">
                          <span>Dynamic Threshold (Limit):</span>
                          <span className="text-cyan-400 font-bold">
                            40 + ({studentCount} × 1.5) = {dynamicLimit} dB
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* Right: Embedded 16x2 LCD Matrix Screen & Hardware LED Indicators */}
                    <div className="lg:col-span-6 space-y-4">
                      
                      {/* LCD 16x2 Hardware Display */}
                      <div className="p-4 rounded-xl bg-slate-950 border-2 border-slate-800 shadow-xl space-y-3">
                        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                          <span className="font-mono text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                            LiquidCrystal (16x2 LCD Display)
                          </span>
                          <span className="font-mono text-[10px]">HD44780 Controller</span>
                        </div>

                        {/* Dot Matrix LCD Green Screen */}
                        <div className="p-4 rounded-lg bg-emerald-950/90 border-4 border-emerald-900/80 shadow-inner font-mono text-emerald-300 space-y-1">
                          <div className="flex justify-between items-center text-sm font-bold tracking-widest bg-emerald-900/40 px-2 py-1 rounded">
                            <span>Students: {String(studentCount).padStart(2, '0')}</span>
                            <span>Noise:{String(soundDb).padStart(3, ' ')}dB</span>
                          </div>
                          <div className="flex justify-between items-center text-sm font-bold tracking-widest bg-emerald-900/40 px-2 py-1 rounded">
                            <span>Status:</span>
                            <span className={`font-black ${
                              acousticStatus === 'QUIET' 
                                ? 'text-emerald-400' 
                                : acousticStatus === 'MODERATE' 
                                  ? 'text-yellow-300' 
                                  : 'text-rose-400 animate-pulse'
                            }`}>
                              [{acousticStatus}]
                            </span>
                          </div>
                        </div>

                        {/* Hardware LED Status Matrix */}
                        <div className="pt-2">
                          <div className="text-[11px] font-semibold text-slate-400 mb-2">
                            Physical LED Status Indicators & Buzzer Alarm (Pins 8, 9, 10, 11):
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
                            
                            {/* Green LED */}
                            <div className={`p-2.5 rounded-lg border flex flex-col items-center gap-1 transition-all ${
                              acousticStatus === 'QUIET'
                                ? 'bg-emerald-950 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/50 shadow-lg shadow-emerald-500/20'
                                : 'bg-slate-900/60 border-slate-800 text-slate-600 opacity-40'
                            }`}>
                              <span className={`w-4 h-4 rounded-full ${
                                acousticStatus === 'QUIET' ? 'bg-emerald-400 shadow-md shadow-emerald-400' : 'bg-slate-700'
                              }`} />
                              <span className="font-bold text-[10px]">PIN 8: GREEN</span>
                              <span className="text-[9px]">QUIET (Normal)</span>
                            </div>

                            {/* Yellow LED */}
                            <div className={`p-2.5 rounded-lg border flex flex-col items-center gap-1 transition-all ${
                              acousticStatus === 'MODERATE'
                                ? 'bg-amber-950 border-amber-500 text-amber-300 ring-2 ring-amber-500/50 shadow-lg shadow-amber-500/20'
                                : 'bg-slate-900/60 border-slate-800 text-slate-600 opacity-40'
                            }`}>
                              <span className={`w-4 h-4 rounded-full ${
                                acousticStatus === 'MODERATE' ? 'bg-amber-400 shadow-md shadow-amber-400' : 'bg-slate-700'
                              }`} />
                              <span className="font-bold text-[10px]">PIN 9: YELLOW</span>
                              <span className="text-[9px]">WARNING</span>
                            </div>

                            {/* Red LED & Buzzer */}
                            <div className={`p-2.5 rounded-lg border flex flex-col items-center gap-1 transition-all ${
                              acousticStatus === 'NOISY!'
                                ? 'bg-rose-950 border-rose-500 text-rose-300 ring-2 ring-rose-500/50 shadow-lg shadow-rose-500/30 animate-pulse'
                                : 'bg-slate-900/60 border-slate-800 text-slate-600 opacity-40'
                            }`}>
                              <span className={`w-4 h-4 rounded-full ${
                                acousticStatus === 'NOISY!' ? 'bg-rose-500 shadow-md shadow-rose-500' : 'bg-slate-700'
                              }`} />
                              <span className="font-bold text-[10px]">PIN 10: RED</span>
                              <span className="text-[9px]">LIMIT EXCEEDED</span>
                            </div>

                          </div>
                        </div>

                        {/* Buzzer Alert Banner */}
                        {isBuzzerActive && (
                          <div className="p-2.5 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center justify-between text-xs animate-pulse">
                            <span className="flex items-center gap-2 font-bold font-mono">
                              <span className="text-base">🚨</span> BUZZER ALARM (PIN 11) TRIGGERED!
                            </span>
                            <span className="text-[11px] font-mono">Limit {dynamicLimit}dB Exceeded</span>
                          </div>
                        )}

                      </div>

                      {/* Real-Time Serial Monitor Console */}
                      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-1.5">
                        <div className="flex items-center justify-between text-slate-500 text-[11px] pb-1 border-b border-slate-800">
                          <span className="flex items-center gap-1.5 text-cyan-400">
                            <Radio className="w-3.5 h-3.5 animate-spin" /> Serial Monitor (9600 Baud)
                          </span>
                          <span>COM4 (Arduino Uno)</span>
                        </div>
                        <div className="space-y-1 text-[11px] text-slate-400">
                          {hardwareLogs.map((log, idx) => (
                            <div key={idx} className={idx === 0 ? 'text-emerald-400 font-semibold' : ''}>
                              {log}
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              )}

              {/* ============================================================== */}
              {/* SIMULATOR 2: PYTHON DATA ANALYTICS & ML INSIGHTS PIPELINE */}
              {/* ============================================================== */}
              {currentProject.simulatorType === 'python-data-ml' && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40">
                      <div className="text-xs text-slate-400 font-medium">Dataset Mean Noise</div>
                      <div className="text-2xl font-bold font-mono text-cyan-400 mt-1">{avgNoise} dB</div>
                      <div className="text-[11px] text-slate-500 mt-1">Computed via NumPy array</div>
                    </div>
                    <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40">
                      <div className="text-xs text-slate-400 font-medium">Peak Recorded Noise</div>
                      <div className="text-2xl font-bold font-mono text-indigo-400 mt-1">{peakNoise} dB</div>
                      <div className="text-[11px] text-slate-500 mt-1">Max value in dataframe</div>
                    </div>
                    <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-800/40">
                      <div className="text-xs text-slate-400 font-medium">Flagged Anomaly Points</div>
                      <div className="text-2xl font-bold font-mono text-rose-400 mt-1">{totalAnomalies} Events</div>
                      <div className="text-[11px] text-slate-500 mt-1">Z-Score threshold &gt; 2.0</div>
                    </div>
                  </div>

                  {/* Filter controls & Excel exporter */}
                  <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-slate-300">Filter by Time:</span>
                      <select
                        value={selectedHour}
                        onChange={(e) => setSelectedHour(e.target.value)}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200"
                      >
                        <option value="All">All Timestamps</option>
                        {rawAcousticData.map(d => (
                          <option key={d.id} value={d.hour}>{d.hour} ({d.room})</option>
                        ))}
                      </select>

                      <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer ml-2">
                        <input
                          type="checkbox"
                          checked={anomalyFilter}
                          onChange={(e) => setAnomalyFilter(e.target.checked)}
                          className="rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-0"
                        />
                        <span>Show Anomalies Only</span>
                      </label>
                    </div>

                    <button
                      onClick={handleExportExcel}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-sm"
                    >
                      <FileSpreadsheet className="w-3.5 h-3.5" />
                      <span>Export to MS Excel (.xlsx)</span>
                    </button>
                  </div>

                  {exportedToast && (
                    <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Success:</strong> Exported classroom_acoustic_report.xlsx with Pandas & MS Excel pipeline!</span>
                    </div>
                  )}

                  {/* Tabular data render */}
                  <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                        <tr>
                          <th className="p-3">Time</th>
                          <th className="p-3">Room</th>
                          <th className="p-3">Occupancy</th>
                          <th className="p-3">Noise Level (dB)</th>
                          <th className="p-3">Z-Score</th>
                          <th className="p-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        {filteredData.map((row) => (
                          <tr key={row.id} className="hover:bg-slate-900/40">
                            <td className="p-3">{row.hour}</td>
                            <td className="p-3 font-semibold text-cyan-400">{row.room}</td>
                            <td className="p-3">{row.students} students</td>
                            <td className="p-3 font-bold">{row.sound_db} dB</td>
                            <td className="p-3">{row.zScore > 0 ? `+${row.zScore}` : row.zScore}</td>
                            <td className="p-3">
                              {row.isAnomaly ? (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                                  ANOMALY
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                  NORMAL
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              )}

              {/* ============================================================== */}
              {/* SIMULATOR 3: HADOOP BIG DATA & SQL DATABASE SYSTEM */}
              {/* ============================================================== */}
              {currentProject.simulatorType === 'hadoop-sql-mgmt' && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-slate-300">Target Relational Table:</span>
                      <button
                        onClick={() => {
                          setSqlTable('nodes');
                          setSqlQuery('SELECT * FROM classroom_nodes WHERE is_active = TRUE;');
                        }}
                        className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-colors ${
                          sqlTable === 'nodes' ? 'bg-cyan-500 text-white' : 'bg-slate-900 text-slate-400'
                        }`}
                      >
                        classroom_nodes (3NF)
                      </button>
                      <button
                        onClick={() => {
                          setSqlTable('logs');
                          setSqlQuery('SELECT * FROM acoustic_logs ORDER BY recorded_at DESC LIMIT 10;');
                        }}
                        className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-colors ${
                          sqlTable === 'logs' ? 'bg-cyan-500 text-white' : 'bg-slate-900 text-slate-400'
                        }`}
                      >
                        acoustic_logs (Time-Series)
                      </button>
                    </div>
                  </div>

                  {/* SQL Terminal Query Display */}
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
                    <div className="text-slate-500 text-[11px] mb-1">Active SQL Query:</div>
                    <div className="text-cyan-400 font-bold">{sqlQuery}</div>
                  </div>

                  {/* Render Table Records */}
                  <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                    {sqlTable === 'nodes' ? (
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                          <tr>
                            <th className="p-3">node_id</th>
                            <th className="p-3">room_number</th>
                            <th className="p-3">sensor_type</th>
                            <th className="p-3">max_capacity</th>
                            <th className="p-3">is_active</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-300">
                          {nodesTableData.map(node => (
                            <tr key={node.node_id} className="hover:bg-slate-900/40">
                              <td className="p-3 text-cyan-400 font-bold">{node.node_id}</td>
                              <td className="p-3 font-semibold">{node.room_number}</td>
                              <td className="p-3 text-slate-400">{node.sensor_type}</td>
                              <td className="p-3">{node.max_capacity} Seats</td>
                              <td className="p-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] ${
                                  node.is_active === 'TRUE' ? 'bg-emerald-950 text-emerald-400' : 'bg-slate-800 text-slate-400'
                                }`}>
                                  {node.is_active}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                          <tr>
                            <th className="p-3">log_id</th>
                            <th className="p-3">node_id</th>
                            <th className="p-3">occupancy_count</th>
                            <th className="p-3">sound_level_db</th>
                            <th className="p-3">status</th>
                            <th className="p-3">recorded_at</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-300">
                          {logsTableData.map(log => (
                            <tr key={log.log_id} className="hover:bg-slate-900/40">
                              <td className="p-3 text-cyan-400 font-bold">{log.log_id}</td>
                              <td className="p-3">{log.node_id}</td>
                              <td className="p-3 font-semibold">{log.occupancy_count} Students</td>
                              <td className="p-3 font-bold">{log.sound_level_db} dB</td>
                              <td className="p-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] ${
                                  log.status === 'NORMAL' ? 'bg-emerald-950 text-emerald-400' : 'bg-rose-950 text-rose-400 animate-pulse'
                                }`}>
                                  {log.status}
                                </span>
                              </td>
                              <td className="p-3 text-slate-400">{log.recorded_at}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: SOURCE CODE */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">Source Implementation: {currentProject.title}</span>
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  View GitHub Repository <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto">
                <pre className="leading-relaxed">
                  <code>{currentProject.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: SPECS & ARCHITECTURE */}
          {activeTab === 'specs' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-cyan-400 mb-2">Project Architecture & Overview</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentProject.longDescription}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Engineering Capabilities & Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentProject.features.map((feat, i) => (
                    <div 
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technical Stack & Tools Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-800/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className={`flex items-center justify-between px-6 py-3.5 border-t text-xs ${
          darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
        }`}>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Computer Science Engineering Sandbox — Anshuman Choubey</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors"
          >
            Close Sandbox
          </button>
        </div>

      </div>
    </div>
  );
};
