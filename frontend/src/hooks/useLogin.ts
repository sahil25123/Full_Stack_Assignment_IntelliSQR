import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../api/authApi';
import { LoginFormData } from '../types/authTypes';

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Store token, redirect, etc.
      console.log('Login successful:', data);
    },
    onError: (error: Error) => {
      console.error('Login error:', error.message);
    },
  });
};