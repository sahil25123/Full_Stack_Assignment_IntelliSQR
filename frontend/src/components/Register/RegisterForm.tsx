import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRegister } from '../../hooks/useRegister';
import * as S from './RegisterForm.styles';

// Zod validation schema
const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const { mutate: register, isPending } = useRegister();
  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    register({
      email: data.email,
      password: data.password
    });
  };

  return (
    <S.RegisterContainer>
      <S.RegisterTitle>Create an account</S.RegisterTitle>
      <S.RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <S.RegisterInput
          type="email"
          placeholder="Email"
          {...registerField('email')}
          $error={!!errors.email}
        />
        {errors.email && <S.ErrorText>{errors.email.message}</S.ErrorText>}

        <S.RegisterInput
          type="password"
          placeholder="Password"
          {...registerField('password')}
          $error={!!errors.password}
        />
        {errors.password && <S.ErrorText>{errors.password.message}</S.ErrorText>}

        <S.RegisterInput
          type="password"
          placeholder="Confirm Password"
          {...registerField('confirmPassword')}
          $error={!!errors.confirmPassword}
        />
        {errors.confirmPassword && <S.ErrorText>{errors.confirmPassword.message}</S.ErrorText>}

        <S.RegisterButton type="submit" disabled={isPending}>
          {isPending ? 'Creating account...' : 'Register'}
        </S.RegisterButton>
      </S.RegisterForm>
    </S.RegisterContainer>
  );
}; 