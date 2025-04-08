import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getAllCarsController } from '../controllers/store.js';

const router = Router();

router.get('/', ctrlWrapper(getAllCarsController));

export default router;
