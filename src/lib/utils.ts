import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string): string {
  // Check if we're running on GitHub Pages by looking at the hostname

  
  const basePath = '';
  return `${basePath}${path}`;
} 