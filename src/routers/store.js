import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getAllCarsController,
  getCarByIdController,
  postCarController,
} from '../controllers/store.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { postCarSchema } from '../validation/store.js';

const router = Router();

router.get('/', ctrlWrapper(getAllCarsController));

router.get('/:id', isValidId, ctrlWrapper(getCarByIdController));

router.post('/', validateBody(postCarSchema), ctrlWrapper(postCarController));
export default router;
