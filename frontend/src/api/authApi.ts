import { LoginFormData, RegisterFormData, LoginResponse, ApiError } from '../types/authTypes';

export const loginUser = async (data: LoginFormData): Promise<LoginResponse> => {
  const response = await fetch('http://localhost:9002/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.error || 'Login failed');
  }

  return response.json();
};

export const registerUser = async (data: RegisterFormData): Promise<LoginResponse> => {
  const response = await fetch('http://localhost:9000/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.error || 'Registration failed');
  }

  return response.json();
};