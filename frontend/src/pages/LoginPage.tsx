import React from 'react';
import styled from '@emotion/styled';
import { LoginForm } from '../components/Login/LoginForm';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

export const LoginPage = () => {
  return (
    <PageContainer>
      <LoginForm />
    </PageContainer>
  );
};