import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getAllCarsController,
  getCarByIdController,
} from '../controllers/store.js';
import { isValidCarId } from '../middlewares/isValidCarId.js';

const router = Router();

router.get('/', ctrlWrapper(getAllCarsController));
router.get('/:carId', isValidCarId, ctrlWrapper(getCarByIdController));

export default router;
