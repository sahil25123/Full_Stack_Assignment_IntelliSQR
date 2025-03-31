import express, { Request, Response, NextFunction } from 'express';
import authRoutes from './src/routes/auth';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Authentication Service is Running');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: err.message 
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;