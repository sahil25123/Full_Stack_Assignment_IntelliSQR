import { Request, Response } from 'express';
import prisma from '../utils/prisma';
import { comparePasswords, generateToken } from '../utils/auth';

interface LoginResponse {
    success: boolean;
    message: string;
    token?: string;
    user?: {
        id: string;
        email: string;
    };
    error?: string;
}

export const loginController = async (req: Request, res: Response<LoginResponse>): Promise<void> => {
    try {
        const { email, password } = req.body;

        // Input validation
        if (!email || !password) {
            res.status(400).json({ 
                success: false,
                message: 'Validation failed',
                error: 'Both email and password are required'
            });
            return;
        }

        // Find user in database
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            res.status(401).json({
                success: false,
                message: 'Authentication failed',
                error: 'Invalid email or password'
            });
            return;
        }

        // Verify password
        const isPasswordValid = await comparePasswords(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({
                success: false,
                message: 'Authentication failed',
                error: 'Invalid email or password'
            });
            return;
        }

        // Generate JWT token
        const token = generateToken(user);

        // Successful response
        res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: 'Internal server error'
        });
    }
};