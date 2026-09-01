// Helper functions & defaults for Profile Photo Management
const STORAGE_KEY = 'vivek_portfolio_photo';

export const DEFAULT_AVATAR_PRESETS = [
  {
    id: 'preset-executive',
    name: 'Executive Blazer',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    tag: 'Formal Suit & Tie'
  },
  {
    id: 'preset-developer',
    name: 'Tech Lead',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    tag: 'Modern Studio'
  },
  {
    id: 'preset-student',
    name: 'Campus Scholar',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80',
    tag: 'Campus Atmosphere'
  },
  {
    id: 'preset-creative',
    name: 'Creative Engineer',
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80',
    tag: 'Professional Headshot'
  }
];

export const getStoredPhoto = (): string | null => {
  try {
    return localStorage.getItem(STORAGE_KEY) || localStorage.getItem('anshuman_portfolio_photo');
  } catch {
    return null;
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
  } catch (err) {
    console.error('Failed to remove photo from storage:', err);
  }
};
