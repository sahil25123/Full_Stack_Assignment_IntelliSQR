import express, { NextFunction, Request, Response } from 'express';
import authRoutes from './src/Routes/auth';

const app = express();
const port = 9000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/', (err : Error, req: Request, res: Response , next:NextFunction) => {
    res.send('Authentication Service is Running');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app;