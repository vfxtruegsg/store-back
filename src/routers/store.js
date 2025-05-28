import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  deleteCarController,
  getAllCarsController,
  getCarByIdController,
  patchCarController,
  postCarController,
} from '../controllers/store.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { authenticate } from '../middlewares/authenticate.js';
import { postCarSchema, updateCarSchema } from '../validation/store.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getAllCarsController));

router.get('/:id', isValidId, ctrlWrapper(getCarByIdController));

router.post('/', validateBody(postCarSchema), ctrlWrapper(postCarController));

router.patch(
  '/:id',
  validateBody(updateCarSchema),
  isValidId,
  ctrlWrapper(patchCarController),
);

router.delete('/:id', isValidId, ctrlWrapper(deleteCarController));

export default router;
