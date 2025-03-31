import { LoginFormData, LoginResponse, ApiError } from '../types/authTypes';

export const loginUser = async (data: LoginFormData): Promise<LoginResponse> => {
  const response = await fetch('http://localhost:9001/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password
    }),
  });

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.message || 'Login failed');
  }

  return response.json();
};