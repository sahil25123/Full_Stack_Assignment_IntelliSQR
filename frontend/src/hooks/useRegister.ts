import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../api/authApi';
import { RegisterFormData } from '../types/authTypes';

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      // Store token, redirect, etc.
      console.log('Registration successful:', data);
    },
    onError: (error: Error) => {
      console.error('Registration error:', error.message);
    },
  });
}; 