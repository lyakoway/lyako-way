export function getMobileOperatingSystem() {
  if (typeof window === 'undefined') {
    return null;
  }
  return window?.navigator?.userAgent || window?.navigator?.vendor || window?.opera;
}