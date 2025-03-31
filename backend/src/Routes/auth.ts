import { Request, Response , NextFunction} from 'express';
// Import the loginController from the controller
import { Router } from 'express';
import { loginController } from '../controller/auth';

const router = Router();

// Use this exact syntax for the route definition
router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    loginController(req, res);
    next();
  });

export default router;