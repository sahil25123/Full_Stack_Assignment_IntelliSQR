import { Request, Response } from 'express';

const mockUsers = [
    { id: 1, email: 'admin@gmail.com', password: 'admin123' },
    { id: 2, email: 'user@gmail.com', password: 'user123' },
    { id:3 , email: 'user2@gmail.com', password: '123456' },
];

export const loginController = (req: Request, res: Response): void => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ 
                success: false,
                error: 'Email and password are required' 
            });
            return;
        }

        const user = mockUsers.find(user => user.email === email);

        if (!user || user.password !== password) {
            res.status(401).json({ 
                success: false,
                error: 'Invalid credentials' 
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                email: user.email
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};