export { default as useRotationAnimation } from './animations/useRotationAnimation';

export const checkIfEmailIsValid = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
