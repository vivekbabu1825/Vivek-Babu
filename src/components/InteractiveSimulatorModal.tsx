import React, { useState } from 'react';
import { 
  X, 
  Play, 
  CheckCircle2, 
  AlertCircle, 
  Lock, 
  Mail, 
  Key, 
  Database, 
  ShoppingBag, 
  Search, 
  Plus, 
  Trash2, 
  Code2, 
  ShieldCheck, 
  Sparkles,
  ExternalLink,
  RefreshCw,
  Check,
  CreditCard
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
  initialProjectId = 'login-credential-page'
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(initialProjectId);
  const [activeTab, setActiveTab] = useState<'simulator' | 'code' | 'specs'>('simulator');

  // --- Project 1: Login Credential Validator State ---
  const [loginEmail, setLoginEmail] = useState('developer@builtstrom.io');
  const [loginPassword, setLoginPassword] = useState('Secur3P@ssword');
  const [loginStatus, setLoginStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: 'Ready for client-side form validation test.'
  });
  const [validationLogs, setValidationLogs] = useState<string[]>([
    'Initialized Builtstrom client-side validation engine.',
    'Listening for DOM input events on #emailInput & #passwordInput.'
  ]);

  // --- Project 2: School Management System State ---
  const [students, setStudents] = useState([
    { id: 101, name: 'Aarav Sharma', grade: 10, roll: 'LPU-2026-01', attendance: 95.5, status: 'Active' },
    { id: 102, name: 'Priya Patel', grade: 12, roll: 'LPU-2026-02', attendance: 92.0, status: 'Active' },
    { id: 103, name: 'Rohan Verma', grade: 11, roll: 'LPU-2026-03', attendance: 88.4, status: 'Active' },
    { id: 104, name: 'Sneha Gupta', grade: 10, roll: 'LPU-2026-04', attendance: 96.8, status: 'Active' },
    { id: 105, name: 'Vikram Singh', grade: 12, roll: 'LPU-2026-05', attendance: 78.5, status: 'Warning' }
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<number | 'ALL'>('ALL');
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentGrade, setNewStudentGrade] = useState<number>(10);
  const [lastSqlQuery, setLastSqlQuery] = useState<string>('SELECT * FROM students ORDER BY grade_level ASC;');

  // --- Project 3: Sneaker E-Commerce State ---
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Streetwear' | 'Athletic' | 'Limited'>('All');
  const [selectedSize, setSelectedSize] = useState<number>(9);
  const [cart, setCart] = useState<{ id: string; name: string; price: number; size: number }[]>([
    { id: '1', name: 'Cyberpunk Retro High', price: 149, size: 9 }
  ]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const sneakersList = [
    { id: 'snk-1', name: 'Cyberpunk Retro High', brand: 'Builtstrom Editions', category: 'Streetwear', price: 149, color: 'Neon Blue & Black', stock: 8 },
    { id: 'snk-2', name: 'Air Zoom Matrix', brand: 'SprintLab', category: 'Athletic', price: 129, color: 'Volt Green / Silver', stock: 14 },
    { id: 'snk-3', name: 'Vapor Carbon X Limited', brand: 'Aura', category: 'Limited', price: 219, color: 'Midnight Obsidian', stock: 3 },
    { id: 'snk-4', name: 'Urban Glide Low', brand: 'DailyFlex', category: 'Streetwear', price: 99, color: 'Triple Clean White', stock: 20 }
  ];

  if (!isOpen) return null;

  const currentProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  // Helper handlers
  const handleValidateLoginForm = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const newLogs = [...validationLogs];

    if (!loginEmail.trim()) {
      setLoginStatus({ type: 'error', message: 'Validation Failed: Email field is required.' });
      newLogs.push(`[${new Date().toLocaleTimeString()}] Validation Error: Email cannot be empty.`);
      setValidationLogs(newLogs.slice(-6));
      return;
    }

    if (!emailRegex.test(loginEmail.trim())) {
      setLoginStatus({ type: 'error', message: 'Validation Failed: Invalid email format (must include valid @ and domain).' });
      newLogs.push(`[${new Date().toLocaleTimeString()}] Regex Match: FAIL on "${loginEmail}"`);
      setValidationLogs(newLogs.slice(-6));
      return;
    }

    if (loginPassword.length < 6) {
      setLoginStatus({ type: 'error', message: 'Validation Failed: Password must be at least 6 characters.' });
      newLogs.push(`[${new Date().toLocaleTimeString()}] Entropy Check: FAIL (Length ${loginPassword.length} < 6)`);
      setValidationLogs(newLogs.slice(-6));
      return;
    }

    setLoginStatus({ type: 'success', message: 'Client-Side Validation PASSED! Credentials sanitized & ready.' });
    newLogs.push(`[${new Date().toLocaleTimeString()}] Form Submission: SUCCESS. Sanitized payload dispatched.`);
    setValidationLogs(newLogs.slice(-6));
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;
    const newId = 100 + students.length + 1;
    const newEntry = {
      id: newId,
      name: newStudentName.trim(),
      grade: newStudentGrade,
      roll: `LPU-2026-0${students.length + 1}`,
      attendance: 98.0,
      status: 'Active'
    };
    setStudents([newEntry, ...students]);
    setNewStudentName('');
    setLastSqlQuery(`INSERT INTO students (first_name, grade_level, roll_number, attendance_rate) VALUES ('${newStudentName}', ${newStudentGrade}, '${newEntry.roll}', 98.00);`);
  };

  const handleDeleteStudent = (id: number) => {
    setStudents(students.filter(s => s.id !== id));
    setLastSqlQuery(`DELETE FROM students WHERE student_id = ${id};`);
  };

  const handleAddToCart = (item: typeof sneakersList[0]) => {
    setCart([...cart, { id: `${item.id}-${Date.now()}`, name: item.name, price: item.price, size: selectedSize }]);
    setToastMessage(`Added "${item.name}" (Size US ${selectedSize}) to Bag!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleRemoveFromCart = (cartIndex: number) => {
    setCart(cart.filter((_, idx) => idx !== cartIndex));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.roll.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGrade = selectedGrade === 'ALL' || s.grade === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  const filteredSneakers = sneakersList.filter(s => {
    if (selectedCategory === 'All') return true;
    return s.category === selectedCategory;
  });

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
                Test Vivek Babu's projects with real-time reactive simulation
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

        {/* Project Selector Ribbon */}
        <div className={`px-5 sm:px-6 py-2.5 border-b flex flex-wrap items-center justify-between gap-3 ${
          darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 mr-1">Select Project:</span>
            {projects.map((p) => {
              const isSelected = p.id === selectedProjectId;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProjectId(p.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm'
                      : darkMode
                        ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{p.title}</span>
                </button>
              );
            })}
          </div>

          {/* Sub Tab Switcher */}
          <div className="flex items-center gap-1 bg-slate-800/40 p-1 rounded-lg border border-slate-700/50">
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                activeTab === 'simulator' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Live Demo
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                activeTab === 'code' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Source Code
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                activeTab === 'specs' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Architecture
            </button>
          </div>
        </div>

        {/* Tab 1: Live Interactive Simulators */}
        {activeTab === 'simulator' && (
          <div className="p-5 sm:p-6 space-y-6 max-h-[72vh] overflow-y-auto">
            
            {/* SIMULATOR 1: Builtstrom Login Credential Validator */}
            {selectedProjectId === 'login-credential-page' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left: Interactive Form Card */}
                <div className={`lg:col-span-6 p-6 rounded-2xl border ${
                  darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'
                }`}>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/60">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold text-sm">Builtstrom Login Interface</span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                      Hackathon Winner Project
                    </span>
                  </div>

                  <form onSubmit={handleValidateLoginForm} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-300">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          placeholder="e.g. name@builtstrom.io"
                          className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-300">
                        Password <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          placeholder="Min 6 characters"
                          className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                        <span>Entropy requirement: ≥ 6 chars</span>
                        <span className={loginPassword.length >= 6 ? 'text-emerald-400 font-semibold' : 'text-amber-400'}>
                          {loginPassword.length} characters
                        </span>
                      </div>
                    </div>

                    {/* Quick Presets */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[10px] text-slate-400">Test Cases:</span>
                      <button
                        type="button"
                        onClick={() => { setLoginEmail('valid.user@builtstrom.org'); setLoginPassword('StrongPass123!'); }}
                        className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 hover:bg-emerald-900/50"
                      >
                        Valid Input
                      </button>
                      <button
                        type="button"
                        onClick={() => { setLoginEmail('invalid-email-no-at'); setLoginPassword('ValidPass123'); }}
                        className="text-[10px] px-2 py-0.5 rounded bg-rose-950/40 text-rose-400 border border-rose-800/40 hover:bg-rose-900/50"
                      >
                        Invalid Email
                      </button>
                      <button
                        type="button"
                        onClick={() => { setLoginEmail('test@domain.com'); setLoginPassword('123'); }}
                        className="text-[10px] px-2 py-0.5 rounded bg-amber-950/40 text-amber-400 border border-amber-800/40 hover:bg-amber-900/50"
                      >
                        Short Password
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Trigger Client-Side Validation</span>
                    </button>
                  </form>

                  {/* Feedback Status Box */}
                  <div className={`mt-4 p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                    loginStatus.type === 'success'
                      ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-300'
                      : loginStatus.type === 'error'
                        ? 'bg-rose-950/40 border-rose-700/60 text-rose-300'
                        : 'bg-slate-900 border-slate-800 text-slate-300'
                  }`}>
                    {loginStatus.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : loginStatus.type === 'error' ? (
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="font-bold">Validation Status</div>
                      <div>{loginStatus.message}</div>
                    </div>
                  </div>
                </div>

                {/* Right: Validation Console & Telemetry */}
                <div className="lg:col-span-6 space-y-4">
                  <div className={`p-5 rounded-2xl border font-mono text-xs ${
                    darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 text-slate-200'
                  }`}>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Code2 className="w-3.5 h-3.5" /> DOM Event Console
                      </span>
                      <span>Client JavaScript Runtime</span>
                    </div>

                    <div className="space-y-1.5 text-[11px] text-slate-300 max-h-44 overflow-y-auto">
                      {validationLogs.map((log, idx) => (
                        <div key={idx} className="leading-relaxed">
                          <span className="text-cyan-400 font-bold">&gt;</span> {log}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Feature Highlights */}
                  <div className={`p-4 rounded-xl border text-xs space-y-2 ${
                    darkMode ? 'bg-slate-950/40 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <div className="font-bold text-slate-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      Key Builtstrom Validations Implemented:
                    </div>
                    <ul className="list-disc pl-4 space-y-1 text-slate-400">
                      <li>Strict RFC 5322-compliant regular expression parsing for email addresses.</li>
                      <li>Client-side input sanitization preventing basic XSS string injections.</li>
                      <li>Interactive error class toggles on form inputs with autofocus recovery.</li>
                      <li>Zero external UI library dependencies — pure vanilla JavaScript DOM APIs.</li>
                    </ul>
                  </div>
                </div>

              </div>
            )}

            {/* SIMULATOR 2: School Management System */}
            {selectedProjectId === 'school-management-system' && (
              <div className="space-y-6">
                
                {/* Search & Action Controls */}
                <div className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${
                  darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search student or roll number..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={`pl-9 pr-3 py-1.5 rounded-lg text-xs font-mono border focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                          darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="text-xs text-slate-400">Filter Grade:</span>
                      {(['ALL', 10, 11, 12] as const).map((grade) => (
                        <button
                          key={grade}
                          onClick={() => setSelectedGrade(grade)}
                          className={`px-2.5 py-1 rounded text-xs font-semibold ${
                            selectedGrade === grade
                              ? 'bg-cyan-500 text-white'
                              : darkMode
                                ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                          }`}
                        >
                          {grade === 'ALL' ? 'All' : `Grade ${grade}`}
                        </button>
                      ))}
                    </div>
                  </div>

                  <span className="text-xs font-mono text-cyan-400">
                    {filteredStudents.length} Active Records Found
                  </span>
                </div>

                {/* Database Table Mockup */}
                <div className={`rounded-xl border overflow-hidden ${
                  darkMode ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className={`text-[11px] font-mono uppercase tracking-wider ${
                        darkMode ? 'bg-slate-950 text-slate-400 border-b border-slate-800' : 'bg-slate-100 text-slate-600 border-b border-slate-200'
                      }`}>
                        <tr>
                          <th className="py-2.5 px-4">Student ID</th>
                          <th className="py-2.5 px-4">Full Name</th>
                          <th className="py-2.5 px-4">Grade</th>
                          <th className="py-2.5 px-4">Roll Number</th>
                          <th className="py-2.5 px-4">Attendance</th>
                          <th className="py-2.5 px-4">Status</th>
                          <th className="py-2.5 px-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 font-mono">
                        {filteredStudents.map((s) => (
                          <tr key={s.id} className={darkMode ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'}>
                            <td className="py-2 px-4 text-cyan-400 font-bold">#{s.id}</td>
                            <td className="py-2 px-4 font-sans font-semibold text-slate-200">{s.name}</td>
                            <td className="py-2 px-4">Grade {s.grade}</td>
                            <td className="py-2 px-4 text-slate-400">{s.roll}</td>
                            <td className="py-2 px-4">
                              <span className={s.attendance >= 90 ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                                {s.attendance}%
                              </span>
                            </td>
                            <td className="py-2 px-4">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                                s.status === 'Active' ? 'bg-emerald-950/60 text-emerald-400' : 'bg-amber-950/60 text-amber-400'
                              }`}>
                                {s.status}
                              </span>
                            </td>
                            <td className="py-2 px-4 text-right">
                              <button
                                onClick={() => handleDeleteStudent(s.id)}
                                className="p-1 rounded text-rose-400 hover:text-rose-300 hover:bg-rose-500/10"
                                title="Delete Record"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Add Student Record Form */}
                <form onSubmit={handleAddStudent} className={`p-4 rounded-xl border flex flex-wrap items-center gap-3 ${
                  darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5 text-cyan-400" /> Add Record:
                  </span>
                  <input
                    type="text"
                    placeholder="New Student Name"
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono border focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                      darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                  <select
                    value={newStudentGrade}
                    onChange={(e) => setNewStudentGrade(Number(e.target.value))}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono border focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                      darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value={10}>Grade 10</option>
                    <option value={11}>Grade 11</option>
                    <option value={12}>Grade 12</option>
                  </select>
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-white shadow-sm transition-colors"
                  >
                    + Insert Student
                  </button>
                </form>

                {/* Live SQL Generated Query Window */}
                <div className={`p-3.5 rounded-xl border font-mono text-xs ${
                  darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 text-slate-200'
                }`}>
                  <div className="text-[10px] text-slate-400 mb-1 flex items-center gap-1.5 text-cyan-400">
                    <Database className="w-3 h-3" /> Relational SQL Engine Execution Trace:
                  </div>
                  <div className="text-amber-300 font-bold">{lastSqlQuery}</div>
                </div>

              </div>
            )}

            {/* SIMULATOR 3: Sneaker E-Commerce Storefront */}
            {selectedProjectId === 'sneaker-e-commerce-website' && (
              <div className="space-y-6">
                
                {/* Header & Cart Summary Bar */}
                <div className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${
                  darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400">Category:</span>
                    {(['All', 'Streetwear', 'Athletic', 'Limited'] as const).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                          selectedCategory === cat
                            ? 'bg-cyan-500 text-white'
                            : darkMode
                              ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-xs">
                      <span className="text-slate-400">Shoe Size:</span>
                      {[8, 9, 10, 11].map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center transition-colors ${
                            selectedSize === size
                              ? 'bg-indigo-600 text-white shadow'
                              : darkMode
                                ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-400 font-mono text-xs font-bold border border-slate-700">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{cart.length} in Bag (${cartTotal})</span>
                    </div>
                  </div>
                </div>

                {toastMessage && (
                  <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{toastMessage}</span>
                  </div>
                )}

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredSneakers.map((sneaker) => (
                    <div
                      key={sneaker.id}
                      className={`p-4 rounded-xl border transition-all duration-200 hover:-translate-y-1 ${
                        darkMode ? 'bg-slate-950/80 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 shadow-sm hover:shadow'
                      }`}
                    >
                      <div className="h-28 rounded-lg bg-gradient-to-tr from-slate-800 to-slate-900 flex flex-col items-center justify-center p-3 text-center mb-3 relative overflow-hidden border border-slate-800">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg mb-1">
                          👟
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">{sneaker.color}</span>
                        <span className="absolute top-2 right-2 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                          {sneaker.category}
                        </span>
                      </div>

                      <div className="text-xs text-slate-400">{sneaker.brand}</div>
                      <div className="font-bold text-sm text-slate-100 truncate mb-2">{sneaker.name}</div>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                        <div className="font-mono font-bold text-sm text-cyan-400">
                          ${sneaker.price}
                        </div>
                        <button
                          onClick={() => handleAddToCart(sneaker)}
                          className="px-2.5 py-1 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-white transition-colors flex items-center gap-1 shadow-sm"
                        >
                          <Plus className="w-3 h-3" /> Add US {selectedSize}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shopping Bag Drawer Mockup */}
                {cart.length > 0 && (
                  <div className={`p-4 rounded-xl border ${
                    darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <ShoppingBag className="w-4 h-4 text-cyan-400" /> Active Cart Items
                      </span>
                      <span className="font-mono text-cyan-400">Subtotal: ${cartTotal} USD</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {cart.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300"
                        >
                          <span className="font-semibold text-white">{item.name}</span>
                          <span className="text-slate-400 text-[10px] font-mono">(US {item.size})</span>
                          <span className="text-cyan-400 font-mono font-bold">${item.price}</span>
                          <button
                            onClick={() => handleRemoveFromCart(idx)}
                            className="text-rose-400 hover:text-rose-300 text-xs ml-1"
                            title="Remove"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>
        )}

        {/* Tab 2: Code Snippet */}
        {activeTab === 'code' && (
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-slate-400">
                {currentProject.title} — Key Logic Excerpt
              </span>
              <button 
                onClick={() => navigator.clipboard.writeText(currentProject.codeSnippet || '')}
                className="text-xs font-semibold px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-400 transition-colors"
              >
                Copy Code
              </button>
            </div>
            <pre className={`p-4 rounded-xl text-xs font-mono leading-relaxed overflow-x-auto max-h-96 ${
              darkMode ? 'bg-slate-950 text-slate-300 border border-slate-800' : 'bg-slate-900 text-slate-200'
            }`}>
              <code>{currentProject.codeSnippet}</code>
            </pre>
          </div>
        )}

        {/* Tab 3: Specs & Architecture */}
        {activeTab === 'specs' && (
          <div className="p-5 sm:p-6 space-y-6">
            <div>
              <h4 className="font-bold text-base text-slate-100 mb-1">{currentProject.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{currentProject.longDescription}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentProject.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className={`p-3.5 rounded-xl border flex items-start gap-2.5 text-xs ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {currentProject.technologies.map((t, idx) => (
                <span 
                  key={idx}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
                    darkMode ? 'bg-slate-800 text-cyan-300 border border-slate-700' : 'bg-slate-100 text-cyan-800'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className={`px-6 py-4 border-t flex items-center justify-between ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs sm:text-sm font-semibold text-cyan-400 hover:underline flex items-center gap-1.5"
          >
            <span>View Vivek's GitHub Repositories</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
          >
            Close Sandbox
          </button>
        </div>

      </div>
    </div>
  );
};
