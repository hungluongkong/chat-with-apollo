import { USER_SECRET } from '../config';

export const isEqualAllProps = <TInterface extends Object>(
  prevProps: TInterface,
  nextProps: TInterface,
): boolean => JSON.stringify(prevProps) === JSON.stringify(nextProps);

/**
 * Generate random id with length = 25
 */
export const generateId = (): string => (
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
);

export const getUserId = (): string => {
  let id = localStorage.getItem(USER_SECRET);

  if (!id) {
    id = generateId();
    localStorage.setItem(USER_SECRET, id);
  }

  return id;
};
