/**
 * Generate random id with length = 25
 */
export const generateId = (): string => (
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
);
