import { devModeStore } from './mode';

export function isDevMode() {
  return devModeStore.get() === true;
}

/**
 * Log
 * @param messages
 */
export function log(...messages: any[]) {
  if (isDevMode()) {
    console.log(messages);
  }
}

/**
 * Log error message
 * @param messages
 */
export function error(...messages: any[]) {
  if (isDevMode()) {
    console.error(messages);
  }
}

/**
 * Log warnings
 * @param messages
 */
export function warn(...messages: any[]) {
  if (isDevMode()) {
    console.warn(messages);
  }
}
