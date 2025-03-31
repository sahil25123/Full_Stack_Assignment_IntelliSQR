import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

export const comparePasswords = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};

export const generateToken = (user: User): string => {
    return jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '1h' }
    );
};