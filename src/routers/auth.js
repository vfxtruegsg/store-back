import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserController } from '../controllers/auth.js';
import { loginUserSchema, registerUserSchema } from '../validation/auth.js';
const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);
router.post('/login', validateBody(loginUserSchema), ctrlWrapper());

export default router;
