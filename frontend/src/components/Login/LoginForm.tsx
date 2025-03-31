import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLogin } from '../../hooks/useLogin';
import * as S from './LoginForm.styles';

// Zod validation schema
const loginSchema = z.object({
  email: z.string().min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const { mutate: login, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  return (
    <S.LoginContainer>
      <S.LoginTitle>Welcome back!</S.LoginTitle>
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <S.LoginInput
          type="email"
          placeholder="Email"
          {...register('email')}
          error={!!errors.email}
        />
        {errors.email && <S.ErrorText>{errors.email.message}</S.ErrorText>}

        <S.LoginInput
          type="password"
          placeholder="Password"
          {...register('password')}
          error={!!errors.password}
        />
        {errors.password && <S.ErrorText>{errors.password.message}</S.ErrorText>}

        <S.LoginButton type="submit" disabled={isPending}>
          {isPending ? 'Logging in...' : 'Login'}
        </S.LoginButton>
      </S.LoginForm>
    </S.LoginContainer>
  );
};