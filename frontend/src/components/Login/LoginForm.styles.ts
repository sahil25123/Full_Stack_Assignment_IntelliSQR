import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  width: 314px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

export const LoginTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #232323;
  margin: 0;
  text-align: center;
  width: 100%;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

interface InputProps {
  error?: boolean;
}

export const LoginInput = styled.input<InputProps>`
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.error ? '#EF4444' : '#D1D5DB')};
  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Plus Jakarta Sans', sans-serif;

  &::placeholder {
    color: #9CA3AF;
  }
`;

export const LoginButton = styled.button`
  margin-top: 30px;
  background-color: #2B3A67;
  color: white;
  padding: 12px 16px;
  border: none;
  border-radius: 6px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
  font-family: 'Plus Jakarta Sans', sans-serif;

  &:hover {
    background-color: #1E2A4A;
  }

  &:disabled {
    background-color: #9CA3AF;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  color: #EF4444;
  font-size: 14px;
  margin-top: -8px;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;