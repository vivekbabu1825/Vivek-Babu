// Profile photo management & default assets for Anshuman Choubey

export const DEFAULT_OFFICIAL_PORTRAIT = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="100%" height="100%">
  <defs>
    <!-- Background studio lighting -->
    <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#f3ede2" />
      <stop offset="60%" stop-color="#e8dfd0" />
      <stop offset="100%" stop-color="#d6caa" />
    </radialGradient>
    
    <!-- Skin tone gradients -->
    <linearGradient id="skinBase" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f2c8aa" />
      <stop offset="50%" stop-color="#e8b694" />
      <stop offset="100%" stop-color="#d99f79" />
    </linearGradient>

    <linearGradient id="skinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#c98e69" />
      <stop offset="100%" stop-color="#b07450" />
    </linearGradient>

    <!-- Hair gradient -->
    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#2c221e" />
      <stop offset="40%" stop-color="#1b1513" />
      <stop offset="100%" stop-color="#0f0c0b" />
    </linearGradient>

    <!-- Blazer gradient (Dark Navy) -->
    <linearGradient id="blazerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e2d3d" />
      <stop offset="50%" stop-color="#141f2c" />
      <stop offset="100%" stop-color="#0d141e" />
    </linearGradient>

    <!-- Tie gradient (Navy with gold) -->
    <linearGradient id="tieGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#19335c" />
      <stop offset="100%" stop-color="#0e1f38" />
    </linearGradient>

    <!-- Gold motif / badge -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffe699" />
      <stop offset="50%" stop-color="#d4af37" />
      <stop offset="100%" stop-color="#aa820a" />
    </linearGradient>

    <!-- Drop shadow for realism -->
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Studio Backdrop -->
  <rect width="400" height="480" fill="url(#bgGrad)" />

  <!-- Body / Torso -->
  <g id="body">
    <!-- White Formal Shirt -->
    <path d="M 140 250 L 260 250 L 250 480 L 150 480 Z" fill="#ffffff" />
    <!-- Shirt Placket & Shadow -->
    <line x1="200" y1="280" x2="200" y2="480" stroke="#e2e8f0" stroke-width="2" />

    <!-- Navy Blazer Back & Shoulders -->
    <path d="M 40 480 C 45 350 75 280 130 255 L 270 255 C 325 280 355 350 360 480 Z" fill="url(#blazerGrad)" filter="url(#softShadow)" />

    <!-- White Shirt Collar -->
    <!-- Left Collar Wing -->
    <path d="M 160 250 L 195 295 L 165 315 L 140 255 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
    <!-- Right Collar Wing -->
    <path d="M 240 250 L 205 295 L 235 315 L 260 255 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />

    <!-- Navy Blue Tie with Golden Shell Motifs -->
    <!-- Tie Knot -->
    <polygon points="186,290 214,290 210,320 190,320" fill="url(#tieGrad)" />
    <!-- Tie Body -->
    <path d="M 190 320 L 210 320 L 218 480 L 182 480 Z" fill="url(#tieGrad)" />
    
    <!-- Golden Motifs on Tie -->
    <g fill="url(#goldGrad)" opacity="0.9">
      <!-- Motif 1 -->
      <path d="M 196 335 C 196 330 204 330 204 335 C 204 340 196 340 196 335 Z" />
      <line x1="200" y1="330" x2="200" y2="340" stroke="#aa820a" stroke-width="0.5" />
      <!-- Motif 2 -->
      <path d="M 193 370 C 193 363 207 363 207 370 C 207 377 193 377 193 370 Z" />
      <!-- Motif 3 -->
      <path d="M 192 410 C 192 402 208 402 208 410 C 208 418 192 418 192 410 Z" />
      <!-- Motif 4 -->
      <path d="M 190 450 C 190 442 210 442 210 450 C 210 458 190 458 190 450 Z" />
    </g>

    <!-- Blazer Lapels -->
    <!-- Left Lapel -->
    <path d="M 130 255 L 182 370 L 125 480 L 40 480 C 45 350 75 280 130 255 Z" fill="#1b2837" stroke="#0f172a" stroke-width="1" />
    <!-- Right Lapel -->
    <path d="M 270 255 L 218 370 L 275 480 L 360 480 C 355 350 325 280 270 255 Z" fill="#172330" stroke="#0f172a" stroke-width="1" />
    
    <!-- Breast Pocket & University Lapel Pin -->
    <line x1="260" y1="410" x2="305" y2="405" stroke="#0f172a" stroke-width="2" />
    
    <!-- Lovely Professional University Crest Lapel Pin -->
    <g id="lpuPin" transform="translate(285, 435)">
      <circle cx="0" cy="0" r="16" fill="url(#goldGrad)" stroke="#664d03" stroke-width="1.5" />
      <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#997404" stroke-width="0.7" />
      <!-- Sun Rays Emblem in crest -->
      <path d="M -8 4 L 0 -10 L 8 4 Z" fill="#b02a30" />
      <circle cx="0" cy="-2" r="3" fill="#eab308" />
      <text x="0" y="8" font-size="3" font-weight="bold" fill="#0f172a" text-anchor="middle" font-family="sans-serif">LPU</text>
    </g>
  </g>

  <!-- Neck -->
  <g id="neck">
    <path d="M 172 205 L 228 205 L 230 265 L 170 265 Z" fill="url(#skinBase)" />
    <!-- Neck Shadow -->
    <path d="M 172 205 C 190 225 210 225 228 205 L 228 235 C 210 245 190 245 172 235 Z" fill="url(#skinShadow)" opacity="0.6" />
  </g>

  <!-- Head / Face -->
  <g id="face">
    <!-- Jawline & Head Structure -->
    <path d="M 148 145 C 145 195 160 235 200 236 C 240 235 255 195 252 145 C 252 95 240 75 200 75 C 160 75 148 95 148 145 Z" fill="url(#skinBase)" filter="url(#softShadow)" />

    <!-- Ears -->
    <!-- Left Ear -->
    <path d="M 148 140 C 140 142 138 165 149 175 Z" fill="#e2a884" stroke="#c98e69" stroke-width="0.8" />
    <!-- Right Ear -->
    <path d="M 252 140 C 260 142 262 165 251 175 Z" fill="#e2a884" stroke="#c98e69" stroke-width="0.8" />

    <!-- Eyebrows -->
    <path d="M 163 130 Q 177 124 188 128" stroke="#231915" stroke-width="3" stroke-linecap="round" fill="none" />
    <path d="M 212 128 Q 223 124 237 130" stroke="#231915" stroke-width="3" stroke-linecap="round" fill="none" />

    <!-- Eyes -->
    <!-- Left Eye -->
    <ellipse cx="177" cy="142" rx="8" ry="5" fill="#ffffff" />
    <circle cx="178" cy="142" r="3.8" fill="#301f16" />
    <circle cx="179.5" cy="140.5" r="1.2" fill="#ffffff" />
    <path d="M 168 140 Q 177 135 186 140" stroke="#2c221e" stroke-width="1.2" fill="none" />

    <!-- Right Eye -->
    <ellipse cx="223" cy="142" rx="8" ry="5" fill="#ffffff" />
    <circle cx="222" cy="142" r="3.8" fill="#301f16" />
    <circle cx="223.5" cy="140.5" r="1.2" fill="#ffffff" />
    <path d="M 214 140 Q 223 135 232 140" stroke="#2c221e" stroke-width="1.2" fill="none" />

    <!-- Nose -->
    <path d="M 200 135 L 198 167 Q 200 172 205 168" stroke="#c98e69" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <path d="M 194 167 Q 200 171 206 167" stroke="#b07450" stroke-width="1.2" fill="none" />

    <!-- Lips / Mouth -->
    <path d="M 188 190 Q 200 194 212 190" stroke="#a25746" stroke-width="2" stroke-linecap="round" fill="none" />
    <path d="M 191 192 Q 200 198 209 192" stroke="#b46452" stroke-width="1.5" fill="none" opacity="0.7" />

    <!-- Chin & Jaw Shadow -->
    <path d="M 192 212 Q 200 216 208 212" stroke="#c98e69" stroke-width="1" fill="none" />

    <!-- Subtle stubble / natural contour -->
    <path d="M 175 198 Q 200 225 225 198" stroke="#8d5f43" stroke-width="0.5" stroke-dasharray="1 2" fill="none" opacity="0.4" />
  </g>

  <!-- Styled Dark Hair -->
  <g id="hair">
    <path d="M 144 135 C 140 100 148 68 180 56 C 205 46 235 52 248 68 C 262 84 258 115 255 135 C 248 115 240 85 215 82 C 190 79 168 98 160 120 C 154 115 147 122 144 135 Z" fill="url(#hairGrad)" />
    
    <!-- Hair Volume & Highlights -->
    <path d="M 165 72 Q 195 56 230 65" stroke="#4a372f" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6" />
    <path d="M 180 62 Q 210 52 235 60" stroke="#3b2b24" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7" />
  </g>
</svg>
`)}`;

const STORAGE_KEY = 'anshuman_portfolio_photo_v2';

export const DEFAULT_AVATAR_PRESETS = [
  {
    id: 'preset-lpu-blazer',
    name: 'Official LPU Blazer',
    url: DEFAULT_OFFICIAL_PORTRAIT,
    tag: 'Formal Suit & University Crest'
  },
  {
    id: 'preset-executive',
    name: 'Executive Studio',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    tag: 'Formal Suit & Tie'
  },
  {
    id: 'preset-developer',
    name: 'Tech Scholar',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    tag: 'Modern Studio Portrait'
  },
  {
    id: 'preset-campus',
    name: 'Campus Coordinator',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80',
    tag: 'DAC Event Organizer'
  }
];

export const getStoredPhoto = (): string => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('anshuman_portfolio_photo');
    if (saved && saved.trim()) {
      return saved;
    }
    return DEFAULT_OFFICIAL_PORTRAIT;
  } catch {
    return DEFAULT_OFFICIAL_PORTRAIT;
  }
};

export const saveStoredPhoto = (photoDataUrlOrLink: string): void => {
  try {
    localStorage.setItem(STORAGE_KEY, photoDataUrlOrLink);
  } catch (err) {
    console.error('Failed to save profile photo to storage:', err);
  }
};

export const removeStoredPhoto = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('anshuman_portfolio_photo');
    localStorage.removeItem('vivek_portfolio_photo');
  } catch (err) {
    console.error('Failed to remove photo from storage:', err);
  }
};
