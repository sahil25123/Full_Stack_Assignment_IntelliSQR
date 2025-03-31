import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Password helpers
export const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, 12);
};

export const comparePasswords = (plainPassword: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

// JWT helpers - accepts user object with number id
export const generateToken = (user: { id: number; email: string }): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error('Missing JWT secret');
  }

  return jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

export const verifyToken = (token: string): { userId: number; email: string } => {
  if (!process.env.JWT_SECRET) {
    throw new Error('Missing JWT secret');
  }

  return jwt.verify(token, process.env.JWT_SECRET) as { userId: number; email: string };
};