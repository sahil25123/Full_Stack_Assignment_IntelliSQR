import { RequestHandler, Router } from 'express';
// Import the loginController from the controller
import { loginController, registerController } from '../controller/auth';

const router = Router();

// Login route
router.post('/login', loginController as RequestHandler);

// Register route
router.post('/register', registerController as RequestHandler);

export default router;
