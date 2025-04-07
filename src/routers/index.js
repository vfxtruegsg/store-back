import { Router } from 'express';
import storeRouter from './store.js';
import authRouter from './auth.js';

const router = Router();

router.use('/store', storeRouter);
router.use('/auth', authRouter);

export default router;
