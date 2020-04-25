import { Router, Request, Response } from 'express';
import { signup, login } from '../routes_controllers/auth.controler';

const router = Router();

router.post('/singup', signup);
router.post('/login', login);

export default router;
