import { mockUsers } from '../data/users';

export const authenticate = (username: string, password: string): boolean => {
  return mockUsers.some(u => u.username === username && u.password === password);
};